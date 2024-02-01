import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import {
  destroyUser,
  fetchJoinedEvents,
  fetchUserEvents,
  getUser,
} from '../adapters/user-adapter';
import { logUserOut } from '../adapters/auth-adapter';
import UpdateUsernameForm from '../components/UpdateUsernameForm';
import EventForm from '../components/EventForm';
import Event from '../components/Event';
import { destroyEvent } from '../adapters/event-adapter';

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [events, setEvents] = useState([]);

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    fetchUserEvents(id).then(setEvents);

    loadUser();
  }, [id]);

  console.log(events);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const handleDelete = async () => {
    setCurrentUser(null);
    navigate('/login');
    destroyUser({ id });
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

  const deleteEvent = async (evId) => {
    destroyEvent({ event_id: evId });
    fetchUserEvents(id).then(setEvents);
  };

  // eslint-disable-next-line func-style
  // async function loadJoinedEvents() {
  //   if (currentUser) {
  //     const signedEvents = await fetchJoinedEvents(currentUser.id);
  //     console.log('signed Events: ', signedEvents);
  //     const obj = {};
  //     signedEvents.forEach((event) => {
  //       obj[event.id] = true;
  //     });
  //     setJoinedEvents(obj);
  //     console.log(obj);
  //   }
  // }

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

      <EventForm
        id={id}
        loadUserEvents={() => fetchUserEvents(id).then(setEvents)}
      />

      {events[0] && <p style={{ fontSize: '30px' }}>My events</p>}
      {events[0] &&
        events.map((event) => (
          <Event
            key={event.id - 800}
            deleteEvent={() => deleteEvent(event.id)}
            event={event}
          />
        ))}

      {!!isCurrentUserProfile && (
        <UpdateUsernameForm
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </>
  );
}
