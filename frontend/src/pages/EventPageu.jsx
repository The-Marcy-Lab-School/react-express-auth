import { useState, useEffect, useContext } from 'react';
import Spline from '@splinetool/react-spline';
import { NavLink, useParams } from 'react-router-dom';
import {
  findEvent,
  joinAnEvent,
  leaveAnEvent,
  fetchAttendeesAmount,
} from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import logo from './assets/images/Union.png';
import { timeObject } from '../utils';
import Comments from '../components/Comments';
import JoinButton from '../components/JoinButton';
import Map from '../components/Map';
import './styles/popup.css';
import {
  createANotification,
  deleteANotification,
} from '../adapters/notification-adapter';

export default function EventPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { eventid } = useParams();
  const [attendeeAmount, setAttendeeAmount] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [map, setMap] = useState('Loading...');

  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchSingleEvent = async () => {
      const ev = await findEvent(eventid);
      setEvent(ev);
    };

    fetchSingleEvent();
  }, [eventid]);

  console.log(event);

  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      console.log('signed Events: ', signedEvents);
      const obj = {};
      signedEvents.forEach((event) => {
        obj[event.id] = true;
      });
      setJoinedEvents(obj);
      console.log(obj);
    }
  };

  useEffect(() => {
    loadJoinedEvents();
  }, [currentUser]);

  const showNav = () => {
    const navigationElement = document.getElementsByClassName('navigation')[0];
    navigationElement.classList.toggle('active');
    const ham = document.getElementsByClassName('ham-btn')[0];
    ham.classList.toggle('bg-red-100');
  };

  const showSpline = (value) => {
    // var spline = document.createElement('div');
    // spline.className = "h-screen bg-center bg-no-repeat bg-cover relative";
    // spline.innerHTML = '<Spline scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />';
    // document.body.appendChild(spline);
    const navigationElement = document.getElementsByClassName('navigation')[0];
    // const splineElement = document.getElementsByClassName("spline")[0];
    // console.log(splineElement.className);
    // splineElement.classList.toggle("hidden")

    switch (value) {
      case 'about':
        navigationElement.classList.toggle('bg-red-300');
        break;
      case 'community':
        navigationElement.classList.toggle('bg-orange-300');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'workouts':
        navigationElement.classList.toggle('bg-green-300');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'profile':
        navigationElement.classList.toggle('bg-blue-200');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }
  };

  // const calculatedStyles = {
  //   x: `calc((100% - ${mousePosition.x}px) * 1%)`,
  //   y: `calc((100% - ${mousePosition.y}px) * 1%)`,
  // };

  // console.log(mousePosition.x);

  const tagsArray =
    event && event.tag_names
      ? event.tag_names.split(',').map((tag) => tag.trim())
      : [];

  const formattedStartDate = new Date(event.date).toLocaleString(
    'en-US',
    timeObject
  );
  const formattedEndDate = new Date(event.end_date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const joinEvent = async () => {
    const user_id = currentUser.id;
    const event_id = event.id;
    if (!(event.id in joinedEvents)) await joinAnEvent({ user_id, event_id });
    else {
      await leaveAnEvent({ user_id, event_id });
      setJoinedEvents((prevJoinedEvents) => {
        const newJoinedEvents = { ...prevJoinedEvents };
        delete newJoinedEvents[event_id];
        return newJoinedEvents;
      });
      const updatedAttendeeAmount = await fetchAttendeesAmount(event_id);
      setAttendeeAmount(updatedAttendeeAmount);
      deleteANotification(event.user_id, user_id);
    }
    setTimeout(async () => {
      await loadJoinedEvents();
    }, 100); // This is so it fetches after sign in has settled in,, should add loading MUST RE VIST
    // await loadJoinedEvents()
    setTimeout(async () => {
      const attendentAmount = await fetchAttendeesAmount(event.id);
      setAttendeeAmount(attendentAmount);
    }, 160);
    createANotification({
      event_id,
      recipient_id: event.user_id,
      attendee_id: user_id,
      text: `
    ${currentUser.name} joined Event ${event.title}`,
    });
  };

  const mapHandler = () => {
    setShowMap(true);
    setTimeout(() => {
      console.log(event.location);
      setMap(<Map location={event.location} />);
    }, 600);
  };

  const checkOnlineAndAttendee = () => {
    if (joinedEvents[event.id]) return true;

    return (
      (event.location === 'Online Class' && event.attendee_count < 4) ||
      (event.location !== 'Online Class' && <p>No</p>)
    );
  };

  const showRoomTime = () => {
    const today = new Date().getTime();
    const startTime = new Date(event.date).getTime();
    const fiveMinutes = 300000;

    if (startTime - today <= fiveMinutes) {
      return (
        <NavLink to={`/room/${event.user_id}`}>Link to online room</NavLink>
      );
    }
    return (
      <p>Your Link to the meeting will appear 5 minutes before the event.</p>
    );
  };

  showRoomTime();

  console.log(event.location);

  const showMapOrRoom = () => {
    const isHost = currentUser && currentUser.id === event.user_id;
    const hasJoined = joinedEvents[event.id];

    if (event.location === 'Online Class') {
      if (isHost || hasJoined) {
        return showRoomTime();
      }
      return <p></p>;
    }
    if (event && showMap && event.location !== 'Online Class') {
      return map;
    }
    return <Map location={event.location} />;
  };

  return (
    <>
      <div className="navigation">
        {/* <h1 class="text-white"> Logo </h1>  */}
        <div className="fixed -translate-y-3">
          <img
            className="absolute rounded-sm ml-24 mt-5"
            src={logo}
            alt="Smiley face"
            width="72"
            height="72"
          />
          <Spline
            className="spline h-screen bg-center bg-no-repeat bg-cover relative"
            scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode"
          />
        </div>
        <div className="ham-btn" onClick={showNav}>
          <span className="rounded-sm"></span>
          <span className="rounded-sm"></span>
        </div>
        <div className="links">
          <div className="link">
            <NavLink
              onMouseOver={() => showSpline('community')}
              onMouseOut={() => showSpline('community')}
              to="/community"
            >
              Events
            </NavLink>
            {/* <a  href="#"> Events </a> */}
          </div>
          <div className="link">
            <NavLink
              onMouseOver={() => showSpline('workouts')}
              onMouseOut={() => showSpline('workouts')}
              to="/workouts"
            >
              Workouts
            </NavLink>
            {/* <a onMouseOver={() => showSpline()} onMouseOut={() => showSpline()} href="#"> Excersise </a> */}
          </div>
          <div className="link">
            <NavLink
              onMouseOver={() => showSpline('profile')}
              onMouseOut={() => showSpline('profile')}
              to={`/users/${currentUser && currentUser.id}`}
            >
              Profile
            </NavLink>
            {/* <a onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} href="#"> About </a> */}
          </div>
          <div className="link">
            <NavLink
              onMouseOver={() => showSpline('about')}
              onMouseOut={() => showSpline('about')}
              to="/about"
            >
              About
            </NavLink>
            {/* <a onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} href="#"> About </a> */}
          </div>
        </div>
      </div>

      <div className="p-24 pt-12">
        <h1 className="text-3xl font-medium mt-2"> {event.title} </h1>

        <img
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-950729835440706966/original/9fd156b5-afab-4b0e-9400-c007d52e2e96.jpeg?im_w=720"
          alt="Modern Glass-Walled House"
          className="w-full h-96 object-cover rounded-lg shadow-md mb-4 mt-7"
        />

        <div className="grid grid-cols-3 mt-8">
          <div className="col-span-2">
            <h2 className="text-xl font-medium"> {event.location} </h2>
            <h3 className="text-md font-regular text-gray-500">
              {formattedStartDate} - {formattedEndDate}
            </h3>

            <div className="flex flex-row mt-7">
              <div className="max-w-20 max-h-20 flex justify-center">
                <img
                  className="rounded-full"
                  src={`../upload/${event.user_profile_pic || 'default.jpg'}`}
                  width={'full'}
                  height={'full'}
                />
              </div>

              <div className="flex justify-center items-center font-medium ml-2">
                <p> Hosted by {event.user_name} </p>
              </div>
            </div>
            <p>
              Attendents: {attendeeAmount || event.attendee_count}
              {event.location === 'Online Class' && <span>/4</span>}
              {event.attendee_count > 3 &&
                event.location === 'Online Class' && (
                  <span> No open spots available</span>
                )}
            </p>

            <div className="mt-8 h-0.5 w-5/6   bg-gray-100"></div>

            <div className="max-w-2xl mt-5 font-normal leading-loose overflow-auto break-words">
              <p>{event.description ? event.description : 'No Description'}</p>
            </div>
          </div>

          <div className="w-full h-full sticky rounded-lg border border-gray-200 p-5 shadow-md font-medium text-white">
            <div className="grid grid-cols-3 gap-2">
              {tagsArray.map((tag) => (
                <div
                  className="bg-yellow-600 text-center justify-center rounded-full w-20 h-7"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>

            {currentUser &&
              currentUser.id !== event.user_id &&
              event.id &&
              checkOnlineAndAttendee() && (
                <JoinButton
                  joinEvent={joinEvent}
                  eventId={event.id}
                  joinedEvents={joinedEvents}
                />
              )}
          </div>
        </div>

        <div className="mt-20 h-0.5  w-full   bg-gray-100"></div>

        <div className="grid grid-cols-2"></div>
        {currentUser && <Comments eventId={event.id} userId={currentUser.id} />}

        <div className="mt-20 h-0.5  w-full   bg-gray-100"></div>

        <h2 className="mt-8 text-2xl font-semibold"> Event Location </h2>
        {event && showMapOrRoom()}
      </div>

      <div className="grid grid-cols-4 left-0 h-screen ml-7"></div>
    </>
  );
}
