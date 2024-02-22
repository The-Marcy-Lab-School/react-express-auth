import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import CurrentUserContext from '../contexts/current-user-context';
import {
  destroyUser,
  fetchJoinedEvents,
  getUser,
} from '../adapters/user-adapter';
import { logUserOut } from '../adapters/auth-adapter';
import UpdateUsernameForm from '../components/UpdateUsernameForm';
import EventForm from '../components/EventForm';
import Event from '../components/Event';
import { destroyEvent } from '../adapters/event-adapter';
import {
  fetchNotifications,
  deleteNotifications,
  createANotification,
} from '../adapters/notification-adapter';
import { useUserStore } from '../store/store';
import Spline from '@splinetool/react-spline';
import { NavLink } from 'react-router-dom';

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const {
    userProfile,
    setUserProfile,
    events,
    setUserEvents,
    errorText,
    setErrorText,
  } = useUserStore((state) => state);
  const [notifications, setNotifications] = useState([]);
  const [notifInit, setNotifInit] = useState(false);
  const [seenNotif, setSeenNotif] = useState(false);
  const [joinedEvents, setJoinedEvents] = useState({});
  const [jEvents, setJevents] = useState([]);

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
      if (isCurrentUserProfile) loadJoinedEvents(currentUser.id);
    };

    setUserEvents(id);

    loadUser();
  }, [id]);

  useEffect(() => {
    const getNotifications = async () => {
      const notifs = await fetchNotifications(id);
      console.log(notifs);
      setNotifications(notifs);
    };

    getNotifications(id);
  }, []);

  const handleLogout = () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const handleDelete = () => {
    setCurrentUser(null);
    navigate('/login');
    destroyUser({ id });
  };

  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      console.log('signed Events: ', signedEvents);
      setJevents(signedEvents);
      const obj = {};
      signedEvents.forEach((event) => {
        obj[event.id] = true;
      });
      setJoinedEvents(obj);
      console.log(obj);
    }
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  const deleteEvent = (evId) => {
    destroyEvent({ event_id: evId });
    setUserEvents(id);
  };

  const removeNotification = async (userId) => {
    deleteNotifications(userId);
  };

  const profilePic = isCurrentUserProfile
    ? currentUser.profile_pic
    : userProfile.profile_pic;

  console.log(events);

  const showNav = () => {
    const navigationElement = document.getElementsByClassName('navigation')[0];
    navigationElement.classList.toggle('active');
    const ham = document.getElementsByClassName('ham-btn')[0];
    ham.classList.toggle('bg-blue-200');
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
    console.log('test');
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

  return (
    <>
      <h1>{profileUsername}</h1>
      {!!isCurrentUserProfile && (
        <button onClick={handleLogout}>Log Out</button>
      )}
      {!!isCurrentUserProfile && (
        <button onClick={handleDelete}>Delete Account</button>
      )}
      {isCurrentUserProfile && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <IoIosNotifications
            size={35}
            onClick={async () => {
              setNotifInit(!notifInit);
              setSeenNotif(true);
              console.log('HUH');
              console.log(currentUser);
              console.log(currentUser.id);
              await removeNotification(id);
            }}
          />
          {notifications.length > 0 && !seenNotif && (
            <div
              style={{
                position: 'absolute',
                top: '5%',
                right: '5px',
                width: '12px',
                height: '12px',
                backgroundColor: 'red',
                borderRadius: '50%',
              }}
            ></div>
          )}
        </div>
      )}

      {isCurrentUserProfile && <h2>Notifications : {notifications.length}</h2>}
      {notifInit &&
        notifications.map((notif, idx) => <p key={idx}>{notif.text}</p>)}

      {/* <div className='bg-gray-200 h-2 top-0 left-0 border-solid border-2 border-gray-400 '>
        <div className='profile flex flex-row'>
          <div className='max-w-16 max-h-16 flex justify-center'>
          <img
            className="rounded-full"
            src={`../upload/${ 'default.jpg'}`}
            width={'full'}
            height={'full'}
          />
          </div>
          <div className='flex justify-center items-center font-medium ml-2'>
            <p> user </p>
          </div>    
        </div>
      </div> */}

      <div className="h-[287px] bg-center bg-no-repeat bg-cover relative bg-blue-300">
        <div className="profile flex flex-row absolute bottom-0 left-0 px-36">
          <div className="max-w-44 max-h-44 flex justify-center">
            <img
              className="rounded-t-sm"
              src={`../upload/${'default.jpg'}`}
              width={'full'}
              height={'full'}
            />
          </div>
          <div className="flex justify-center items-end font-bold ml-5 mb-7 text-white">
            <h1> {profileUsername} </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-14 bg-white font-medium text-gray-500">
        <button
          className={`w-20 h-10 flex items-center justify-center ${
            activeTab === 'overview'
              ? 'text-blue-600 font-medium'
              : 'text-gray-500'
          } hover:text-blue-200`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`w-20 h-10 flex items-center justify-center ${
            activeTab === 'events'
              ? 'text-blue-600 font-medium'
              : 'text-gray-500'
          } hover:text-blue-200`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button
          className={`w-20 h-10 flex items-center justify-center ${
            activeTab === 'management'
              ? 'text-blue-600 font-medium'
              : 'text-gray-500'
          } hover:text-blue-200`}
          onClick={() => setActiveTab('management')}
        >
          Management
        </button>
      </div>

      {activeTab === 'overview' && <Overview />}
      {activeTab === 'events' && <Events />}
      {activeTab === 'management' && <Management />}

      {console.log(activeTab)}

      {/* <EventForm id={id} loadUserEvents={() => setUserEvents(id)} /> */}

      {/* { userProfile.profile_pic &&<img src={imagePath}></img>} */}
    </> // /upload/${userProfile.profile_pic}
  );

  function Overview() {
    return <div>This is the overview tab.</div>;
  }

  function Events() {
    return (
      <div>
        {events[0] && <p style={{ fontSize: '30px' }}>My events</p>}
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

        {jEvents && <p style={{ fontSize: '30px' }}>Joined events</p>}
        {jEvents &&
          jEvents.map((event) => (
            <Event
              key={event.id - 800}
              event={event}
              loadJoinedEvents={loadJoinedEvents}
              joinedEvents={joinedEvents}
            />
          ))}
      </div>
    );
  }

  function Management() {
    return (
      <div>
        {!!isCurrentUserProfile && (
          <UpdateUsernameForm
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        )}
        {console.log(userProfile)}
        {/* <img src="/upload/1706824948115wowow.png" alt="img" /> */}
        {userProfile.profile_pic && (
          // <img src={`../public/upload/${profilePic}`}></img>
          <h1>hi</h1>
        )}
        {console.log(notifications)}

        {!!isCurrentUserProfile && (
          <button onClick={handleLogout}>Log Out</button>
        )}
        {!!isCurrentUserProfile && (
          <button onClick={handleDelete}>Delete Account</button>
        )}
        <EventForm id={id} loadUserEvents={() => setUserEvents(id)} />
      </div>
    );
  }
}
