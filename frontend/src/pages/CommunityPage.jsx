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
import { NavLink } from 'react-router-dom';


export default function CommunityPage() {
  const { currentUser } = useContext(CurrentUserContext);
  // const [events, setEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { events, setRecentEvents } = useEventsStore((state) => state);

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
    ham.classList.toggle("bg-orange-200");
    
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
           {currentUser && <NavLink onMouseOver={() => showSpline("profile")} onMouseOut={() => showSpline("profile")} to={`/users/${currentUser.id}`}>Profile</NavLink>}
            {/* <a onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} href="#"> About </a> */}
          </div>
          <div class="link">
            <NavLink onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} to="/about">About</NavLink>
            {/* <a onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} href="#"> About </a> */}
          </div>
         
        </div>
      </div>

      <div className="h-[380px] bg-center bg-no-repeat bg-cover relative bg-orange-200" >

        <div class="fixed translate-y-3">
          <img class="rounded-sm ml-24" src={logo} alt="Smiley face" width="72" height="72" />
        
        </div>
        

        <div class="relative top-20 left-0 ml-24 font-semibold text-2xl">
          <p>Events</p>
        </div>


        <Spline className="h-screen bg-center bg-no-repeat bg-cover relative" scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />

        
        <h1 className="absolute left-7 bottom-28 text-8xl mb-7">Excercise with </h1>
          <h1 className="absolute left-7 bottom-24 text-4xl">
            <span className="text-orange-600">Others</span>
            <span className="text-black">.</span>
          </h1>


          <div class="absolute left-0 -bottom-1">
            <div class="p-8 w-full bg-white" style={{clipPath: "polygon(93% 0, 0% 0%, 0% 100%, 100% 100%)", width:"58vw"}}>
            </div>

          </div>
     


      </div>




      <div class="flex items-center justify-center">
          <div class="relative w-96 h-16 mt-9 border border-gray-200 shadow-md bg-white rounded-full">
              <input class="absolute inset-0 m-3 ml-5 outline-none text-base" type="text" placeholder="Type something..." />
              <button class="absolute inset-y-0 right-0 w-14 h-5/6 mt-1 rounded-full bg-transparent border-none outline-none" type="submit" name="searchQuerySubmit">
                  <div class="w-10 h-10 m-2 bg-orange-200 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6" viewBox="0 0 24 24">
                          <path fill="#ffff" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                      </svg>
                  </div>
              </button>
          </div>
      </div>




      <div class="mt-8 h-0.5  w-full   bg-gray-100"></div>


      <div class="grid grid-cols-4 left-0 h-screen ml-7">
      {currentUser && console.log(currentUser.id)}
      {events[0] &&
        events.map((event) => (
          <Event
            key={event.id - 800}
            deleteEvent={() => deleteEvent(event.id)}
            event={event}
            loadJoinedEvents={loadJoinedEvents}
            joinedEvents={joinedEvents}
          />
        ))}
      </div>

      <div className="relative">
        <button className="absolute bottom-0 right-0 mb-4 mr-4 text-5xl bg-orange-200 hover:bg-orange-500 text-white font-bold py-6 px-8 rounded-full">
          +
        </button>
     </div>

      

      
      
    </>
  );
}
