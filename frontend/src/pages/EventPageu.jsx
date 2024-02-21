import { useState, useEffect, useContext } from 'react';
import {
  fetchRecentEvents,
  fetchCommentsOnEvent,
  destroyEvent,
} from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import Event from '../components/Event';
import { useEventsStore } from '../store/store';
import logo from './assets/images/Union.png';
import Spline from '@splinetool/react-spline';
import { NavLink, useParams } from 'react-router-dom';
import { timeObject } from '../utils';
import Comments from '../components/Comments';
import JoinButton from '../components/JoinButton';
import Map from '../components/Map';
import './styles/popup.css'




export default function EventPage() {
  const { currentUser } = useContext(CurrentUserContext);
  // const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { events, setRecentEvents } = useEventsStore((state) => state);
  const { eventid } = useParams();
  const [attendeeAmount, setAttendeeAmount] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [map, setMap] = useState('Loading...');
  const mousePosition = { x: 60, y: 0 };




  useEffect(() => {
    setRecentEvents();
  }, [setRecentEvents]);

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

  console.log(events);

  const deleteEvent = async (id) => {
    destroyEvent({ event_id: id });
    setRecentEvents();
  };

  console.log(events);

  const showNav = () => {
    const navigationElement = document.getElementsByClassName("navigation")[0];
    navigationElement.classList.toggle("active");
    const ham = document.getElementsByClassName("ham-btn")[0];
    ham.classList.toggle("bg-red-100");
    console.log({id})
    
  }

  const showSpline = (value) => {
    // var spline = document.createElement('div');
    // spline.className = "h-screen bg-center bg-no-repeat bg-cover relative";
    // spline.innerHTML = '<Spline scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />';
    // document.body.appendChild(spline);
    const navigationElement = document.getElementsByClassName("navigation")[0];
    // const splineElement = document.getElementsByClassName("spline")[0];
    // console.log(splineElement.className); 
    // splineElement.classList.toggle("hidden")
    console.log("test")
    switch (value) {
      case 'about':
        navigationElement.classList.toggle("bg-red-300");
        break;
      case 'community':
        navigationElement.classList.toggle("bg-orange-300");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'workouts':
        navigationElement.classList.toggle("bg-green-300");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'profile':
          navigationElement.classList.toggle("bg-blue-200");
          // Expected output: "Mangoes and papayas are $2.79 a pound."
          break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }


    
  }

  let idToFind = parseInt(eventid);
  let index = events.findIndex(event => event.id === idToFind);
  let eventNum;
  const calculatedStyles = {
    x: `calc((100% - ${mousePosition.x}px) * 1%)`,
    y: `calc((100% - ${mousePosition.y}px) * 1%)`
  };
  

  console.log(mousePosition.x)





  if (index !== -1) {
      eventNum = events[index];
  } else {
      console.log('No object found with the given ID');
  }

  // console.log(typeof(eventNum.tag_names))

  
  let tagsArray = eventNum.tag_names.split(',').map(tag => tag.trim());



  const formattedStartDate = new Date(eventNum.date).toLocaleString(
    'en-US',
    timeObject
  );
  const formattedEndDate = new Date(eventNum.end_date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });


  const joinEvent = async () => {
    const user_id = currentUser.id;
    const event_id = eventNum.id;
    if (!(eventNum.id in joinedEvents)) await joinAnEvent({ user_id, event_id });
    else await leaveAnEvent({ user_id, event_id });
    setTimeout(async () => {
      await loadJoinedEvents();
    }, 100); // This is so it fetches after sign in has settled in,, should add loading MUST RE VIST
    // await loadJoinedEvents()
    setTimeout(async () => {
      const attendentAmount = await fetchAttendeesAmount(eventNum.id);
      setAttendeeAmount(attendentAmount);
    }, 160);
  };

  const mapHandler = () => {
    setShowMap(true);
    setTimeout(() => {
      setMap(<Map location={eventNum.location} />);
    }, 1200);
  };

  const checkOnlineAndAttendee = () => {
    if (joinedEvents[eventNum.id]) return true;

    return (
      (eventNum.location === 'Online Class' && eventNum.attendee_count < 4) ||
      eventNum.location !== 'Online Class'
    );
  };

  const showRoomTime = () => {
    const today = new Date().getTime();
    const startTime = new Date(eventNum.date).getTime();
    const fiveMinutes = 300000;

    if (startTime - today <= fiveMinutes) {
      return (
        <NavLink to={`/room/${eventNum.user_id}`}>Link to online room</NavLink>
      );
    }
    return (
      <p>Your Link to the meeting will appear 5 minutes before the event.</p>
    );
  };

  showRoomTime();

  const showMapOrRoom = () => {
    const isHost = currentUser && currentUser.id === eventNum.user_id;
    const hasJoined = joinedEvents[eventNum.id];

    if (eventNum.location === 'Online Class') {
      if (isHost || hasJoined) {
        return showRoomTime();
      }
      return <p></p>;
    }
    if (showMap && eventNum.location !== 'Online Class') {
      return map;
    }
    return mapHandler();
  };

  const style = {
    background: '#eab308',
    boxShadow:  '-5px 5px 10px #c79807, 5px -5px 10px #ffce09'
  };

  return (
    <>
    

      <div class='navigation'>
        {/* <h1 class="text-white"> Logo </h1>  */}
        <div class="fixed -translate-y-3">
          <img class="absolute rounded-sm ml-24 mt-5" src={logo} alt="Smiley face" width="72" height="72" />
          <Spline className="spline h-screen bg-center bg-no-repeat bg-cover relative" scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />
    
        </div>
        <div class="ham-btn" onClick={showNav}>
          <span class="rounded-sm"></span>
          <span class="rounded-sm"></span>
        </div>
        <div class="links">
          <div class="link">
            <NavLink onMouseOver={() => showSpline("community")} onMouseOut={() => showSpline("community")} to="/community">Events</NavLink>
            {/* <a  href="#"> Events </a> */}
          </div>
          <div class="link">
            <NavLink onMouseOver={() => showSpline("workouts")} onMouseOut={() => showSpline("workouts")} to="/workouts">Workouts</NavLink>
            {/* <a onMouseOver={() => showSpline()} onMouseOut={() => showSpline()} href="#"> Excersise </a> */}
          </div>
          <div class="link">
            <NavLink onMouseOver={() => showSpline("profile")} onMouseOut={() => showSpline("profile")} to={`/users`}>Profile</NavLink>
            {/* <a onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} href="#"> About </a> */}
          </div>
          <div class="link">
            <NavLink onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} to="/about">About</NavLink>
            {/* <a onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} href="#"> About </a> */}
          </div>
         
        </div>
      </div>

      {/* <div class="mt-2 h-0.5 bg-gray-300"></div>
			<div class="border-t-1"></div>  */}

      <div className='p-24 pt-12'>
        <h1 className='text-3xl font-medium mt-2'> {eventNum.title } </h1>

        <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-950729835440706966/original/9fd156b5-afab-4b0e-9400-c007d52e2e96.jpeg?im_w=720" alt="Modern Glass-Walled House" class="w-full h-96 object-cover rounded-lg shadow-md mb-4 mt-7"/>

        <div className='grid grid-cols-3 mt-8'>
          <div className='col-span-2'>
            <h2 className='text-xl font-medium'> {eventNum.location } </h2>
            <h3 className='text-md font-regular text-gray-500'> {formattedStartDate } - {formattedEndDate }</h3>
          
            <div className='flex flex-row mt-7'>
              <div className='max-w-20 max-h-20 flex justify-center'>
                    <img
                        className="rounded-full"
                        src={`../upload/${eventNum.user_profile_pic || 'default.jpg'}`}
                        width={'full'}
                        height={'full'}
                    />
                </div>
                
                <div className='flex justify-center items-center font-medium ml-2'>
                    <p> Hosted by {eventNum.user_name} </p>
                </div>

             

            
            </div>
            
            <div class="mt-8 h-0.5 w-5/6   bg-gray-100"></div>

            <div className='max-w-2xl mt-5 font-normal leading-loose overflow-auto break-words'>
                <p>{eventNum.description ? eventNum.description : "No Description"}</p>              
            </div>

          </div>

          <div className='w-full h-full sticky rounded-lg border border-gray-200 p-5 shadow-md font-medium text-white'>
            <div className='grid grid-cols-3 gap-2'>
            {tagsArray.map(tag => {
              return <div className= 'bg-yellow-600 text-center justify-center rounded-full w-20 h-7' key={tag}>{tag}</div>;
            })}
            </div>
            
            <button className="bg-yellow-500 text-white font-bold py-2 px-4 w-full mt-5 h-12 rounded-lg"  style={style} >
              Attend
            </button>
          </div>         
        </div>
        
        <div class="mt-20 h-0.5  w-full   bg-gray-100"></div>

        <div className='grid grid-cols-2'>
          

        </div>
        <Comments eventId={eventNum.id} userId={currentUser.id} />

        <div class="mt-20 h-0.5  w-full   bg-gray-100"></div>

        <h2 className='mt-8 text-2xl font-semibold'> Event Location </h2>
        {showMapOrRoom()}

      </div>

      


      <div class="grid grid-cols-4 left-0 h-screen ml-7">
      {currentUser && console.log(currentUser.id)}
      {console.log(eventid)}
      </div>

      

      
      
    </>
  );
}
