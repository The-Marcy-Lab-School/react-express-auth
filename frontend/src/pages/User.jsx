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

  return (
    <>
      <h1>{profileUsername}</h1>
      {!!isCurrentUserProfile && (
        <button onClick={handleLogout}>Log Out</button>
      )}
      {!!isCurrentUserProfile && (
        <button onClick={handleDelete}>Delete Account</button>
      )}
      <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something</p>

      <EventForm id={id} loadUserEvents={() => setUserEvents(id)} />

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
      {/* { userProfile.profile_pic &&<img src={imagePath}></img>} */}
    </> // /upload/${userProfile.profile_pic}
  );
}
