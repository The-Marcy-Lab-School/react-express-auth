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
import { useErrorStore } from '../store/store';

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [events, setEvents] = useState([]);

  const errorText = useErrorStore((state) => state.errorText);
  const setErrorText = useErrorStore((state) => state.setErrorText);

  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  // const imagePath = process.env.PUBLIC_URL + '/upload/1706815235258wowow.png'

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

  const profilePic = isCurrentUserProfile
    ? currentUser.profile_pic
    : userProfile.profile_pic;

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
