import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { useUserStore } from '../store/store';

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

  const [joinedEvents, setJoinedEvents] = useState({});
  const [jEvents, setJEvents] = useState([]);

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    setUserEvents(id);

    loadUser();
  }, [id]);

  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      console.log('signed Events: ', signedEvents);
      setJEvents(signedEvents);
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

  console.log(jEvents);

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

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  const deleteEvent = (evId) => {
    destroyEvent({ event_id: evId });
    setUserEvents(id);
  };

  const profilePic = isCurrentUserProfile
    ? currentUser.profile_pic
    : userProfile.profile_pic;

  console.log(events);
  console.log(currentUser.profile_pic)

  return (
    <>
      {/* <h1>{profileUsername}</h1> */}
     
      {/* <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something</p> */}

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

    <div className='profile flex flex-row absolute bottom-0 left-0 px-36'>
      <div className='max-w-44 max-h-44 flex justify-center'>
        <img
          className="rounded-t-sm"
          src={`../upload/${'default.jpg'}`}
          width={'full'}
          height={'full'}
        />
      </div>
      <div className='flex justify-center items-end font-bold ml-5 mb-7 text-white'>
        <h1> {profileUsername} </h1>
      </div>    
        </div>
    </div>
    
    <div className="flex flex-row items-center justify-center space-x-14 bg-white font-medium text-gray-500">
      <button  
        className={`w-20 h-10 flex items-center justify-center ${activeTab === 'overview' ? 'text-blue-600 font-medium' : 'text-gray-500'} hover:text-blue-200`} 
        onClick={() => setActiveTab('overview')}
      >
        Overview
      </button>
      <button  
        className={`w-20 h-10 flex items-center justify-center ${activeTab === 'events' ? 'text-blue-600 font-medium' : 'text-gray-500'} hover:text-blue-200`} 
        onClick={() => setActiveTab('events')}
      >
        Events
      </button>
      <button  
        className={`w-20 h-10 flex items-center justify-center ${activeTab === 'management' ? 'text-blue-600 font-medium' : 'text-gray-500'} hover:text-blue-200`} 
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

        {!!isCurrentUserProfile && (
          <button onClick={handleLogout}>Log Out</button>
        )}
        {!!isCurrentUserProfile && (
          <button onClick={handleDelete}>Delete Account</button>
        )}
      </div>
    );
  }
}
