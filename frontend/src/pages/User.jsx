import { useContext, useEffect, useState, useRef } from 'react';
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
import Event from '../components/Event';
import { destroyEvent } from '../adapters/event-adapter';
import {
  fetchNotifications,
  deleteNotifications,
} from '../adapters/notification-adapter';
import { useUserStore } from '../store/store';
import Navigation from '../components/Navigation';

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
  const [activeTab, setActiveTab] = useState('events');
  const [activeDiv, setActiveDiv] = useState('profile');

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
    navigate('/');
    destroyUser({ id });
  };

  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      setJevents(signedEvents);
      const obj = {};
      signedEvents.forEach((event) => {
        obj[event.id] = true;
      });
      setJoinedEvents(obj);
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
  // console.log(currentUser.profile_pic)

  

  return (
    <>
      <Navigation currentUser={currentUser} />

      <div className="h-[287px] bg-center bg-no-repeat bg-cover relative bg-blue-300">
        <div className="profile flex flex-row absolute bottom-0 left-0 px-52">
          <div className="max-w-48 max-h-48 flex justify-center items-center">
            <img
              className="rounded-t-lg"
              src={`../upload/${profilePic || 'default.jpg'}`}
              width={'full'}
              height={'full'}
            />

            <div className="flex font-bold text-white bg-slate-700 items-center justify-center h-12 -ml-8 p-12">
              <h1 className="inline-block text-5xl font-semibold">
                {profileUsername}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-14 bg-white font-medium text-gray-500 text-2xl">
        <div
          className={`events ${
            activeTab === 'events' ? 'bg-blue-200 p-5' : ''
          }`}
        >
          <button
            className={`w-20 h-10 flex items-center justify-center ${
              activeTab === 'events'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>

        <div
          className={`management ${
            activeTab === 'management' ? 'bg-blue-200 p-5' : ''
          }`}
        >
          <button
            className={`h-10 flex items-center justify-center ${
              activeTab === 'management'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('management')}
          >
            Management
          </button>
        </div>
      </div>

      {activeTab === 'events' && <Events />}
      {activeTab === 'management' && <Management />}
    </>
  );

  // The Function is there to take advantage of hoisting don't change to arrow function

  function Events() {
    return (
      <div className="mb-12 max-h-full pb-32 h-screen font-bold px-52">
        {events[0] && (
          <p className="font-bold mt-7 mb-7" style={{ fontSize: '42px' }}>
            My Events
          </p>
        )}
        <div className="grid grid-cols-3">
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
        <div className=''>      
        {jEvents && (
          <p className="" style={{ fontSize: '42px' }}>
            Joined Events
          </p>
        )}
        <div className="grid grid-cols-3">
          {jEvents.length > 0 ? (
            jEvents.map((event) => (
              <Event
                key={event.id - 800}
                event={event}
                loadJoinedEvents={loadJoinedEvents}
                joinedEvents={joinedEvents}
              />
            ))
          ) : (
            <div className="max-w-xs relative flex">
              <p className="s">No joined events :[</p>{' '}
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }

  function Management() {
    return (
      <div className="mb-12 max-h-full pb-32 px-52">
        <h1 className="font-bold mt-7 mb-7" style={{ fontSize: '42px' }}>
          Management
        </h1>
        <div className="grid grid-cols-2 gap-4 w-80 w-44 text-xl">
          <div className="bg-blue-300 h-56 font-semibold text-gray-800">
            <div
              className="profile flex flex-row"
              onClick={() => setActiveDiv('profile')}
            >
              <div className="border-r-4 border-blue-600 max-h-full"></div>
              <p className="p-2 cursor-pointer"> Profile </p>
            </div>

            <div
              className="notifications flex flex-row"
              onClick={() => setActiveDiv('notifications')}
            >
              <div className="border-r-4 border-blue-500 max-h-full"></div>
              <p className="p-2 cursor-pointer"> Notification </p>
            </div>
          </div>

              {activeDiv === 'profile' && (
                <div>
                  {isCurrentUserProfile && (
                    <UpdateUsernameForm
                      currentUser={currentUser}
                      setCurrentUser={setCurrentUser}
                    />
                  )}

                  <div className='w-full mt-5'>
                    {isCurrentUserProfile && (
                      <button onClick={handleLogout}>Log Out</button>
                    )}
                    {isCurrentUserProfile && (
                      <button onClick={handleDelete}>Delete Account</button>
                    )}
                  </div>  
                </div>
              )}

              {activeDiv === 'notifications' && (
                <div className=''>
                  {isCurrentUserProfile && (
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <IoIosNotifications
                        size={35}
                        onClick={async () => {
                          setNotifInit(!notifInit);
                          setSeenNotif(true);
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

                  {isCurrentUserProfile && (
                    <h2>Notifications : {notifications.length}</h2>
                  )}
                  {notifInit &&
                    notifications.map((notif, idx) => (
                      <p key={idx}>{notif.text}</p>
                    ))}
                </div>
              )} 
            </div>
        </div>
      
    );
  }
}
