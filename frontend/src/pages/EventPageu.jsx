import { useState, useEffect, useContext } from 'react';
import { NavLink, useParams, Navigate, useNavigate } from 'react-router-dom';
import {
  findEvent,
  joinAnEvent,
  leaveAnEvent,
  fetchAttendeesAmount,
  destroyEvent,
} from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import logo from './assets/images/Union.png';
import { eventPictures, timeObject } from '../utils';
import Comments from '../components/Comments';
import JoinButton from '../components/JoinButton';
import Map from '../components/Map';
import './styles/popup.css';
import {
  createANotification,
  deleteANotification,
} from '../adapters/notification-adapter';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function EventPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { eventid } = useParams();
  const [attendeeAmount, setAttendeeAmount] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [map, setMap] = useState('Loading...');
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

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
    if (!(event.id in joinedEvents)) {
      await joinAnEvent({ user_id, event_id });
    } else {
      await leaveAnEvent({ user_id, event_id });
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

  const deleteEvent = async () => {
    destroyEvent({ event_id: event.id });
    navigate('/community');
  };

  const buttonStyles = {
    borderRadius: '10px',
    background: '#e0e0e0',
    boxShadow: 'inset -20px 20px 60px #bebebe, inset 20px -20px 60px #ffffff',
    width: '100%',
    height: '80%',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    cursor: 'not-allowed',
    fontSize: '14px',
    transition: 'background 1ms ease-in',
  };

  return (
    <>
      <Navigation currentUser={currentUser} />

      <div className="p-24 pt-20">
        <h1 className="text-3xl font-medium mt-2"> {event.title} </h1>

        <img
          src={eventPictures(event.location)}
          alt="Image for event location"
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

            <div className="mt-8 h-0.5 w-5/6   bg-gray-100"></div>

            <div className="max-w-2xl mt-5 font-normal leading-loose overflow-auto break-words">
              <p>{event.description ? event.description : 'No Description'}</p>
            </div>
          </div>

          <div className="w-full h-full sticky rounded-lg border border-gray-200 p-5 shadow-md font-medium text-white">
            <div className="grid grid-cols-3 gap-2">
              {tagsArray.map((tag) => (
                <div
                  className="bg-yellow-600  rounded-full w-10/12 h-7 text-sm"
                  key={tag}
                >
                  <p className='text-center justify-center mt-1'> {tag} </p>
                </div>
              ))}
            </div>

            <p className='text-black mt-5'>
                Attendents: {attendeeAmount || event.attendee_count}
                {event.location === 'Online Class' && <span>/4</span>}
                {event.attendee_count > 3 &&
                  event.location === 'Online Class' && (
                    <span> No open spots available</span>
                  )}
              </p>
            
            <div className='mt-5'>
              {currentUser && currentUser.id !== event.user_id && event.id && checkOnlineAndAttendee() ? (
                <JoinButton
                  joinEvent={joinEvent}
                  eventId={event.id}
                  joinedEvents={joinedEvents}
                />
              ) : (
                <button style={buttonStyles}>
                  <p className='font-bold' > Your Event </p>
                </button>
              )}

              <div className='w-full flex justify-center items-center mt-5'>
                {currentUser && currentUser.id === event.user_id ? (
                  <button className='text-red-500' onClick={deleteEvent}>Delete Event</button>
                ) : (
                  <p></p>
                )}
              </div>

              <p className='text-black justify-center text-center mt-5 text-sm'> Remember, don't over exert yourself. </p>
            </div>
          </div>
        </div>

        <div className="mt-20 h-0.5  w-full   bg-gray-100"></div>

        <div className="grid grid-cols-2"></div>
        {currentUser && <Comments eventId={event.id} userId={currentUser.id} />}

        <div className="mt-20 h-0.5  w-full   bg-gray-100"></div>

        <h2 className="mt-8 text-2xl font-semibold"> Event Location </h2>
        {event && showMapOrRoom()}
      </div>

      <Footer />
    </>
  );
}
