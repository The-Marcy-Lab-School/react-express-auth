import { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { eventPictures, timeObject } from '../utils';
import {
  joinAnEvent,
  leaveAnEvent,
  fetchAttendeesAmount,
  destroyEvent,
} from '../adapters/event-adapter';
import {
  createANotification,
  deleteANotification,
} from '../adapters/notification-adapter';
import CurrentUserContext from '../contexts/current-user-context';
// import './styles/Event.css';
import Comments from './Comments';
import JoinButton from './JoinButton';
import Map from './Map';

const Event = (props) => {
  const { currentUser } = useContext(CurrentUserContext);

  const { event, loadJoinedEvents, joinedEvents, deleteEvent } = props;
  const [commentsinit, setCommentsInit] = useState(false);
  const [attendeeAmount, setAttendeeAmount] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [map, setMap] = useState('Loading...');

  const tagsArray = event.tag_names.split(',').map((tag) => tag.trim());

  const formattedStartDate = new Date(event.date).toLocaleString(
    'en-US',
    timeObject
  );
  const formattedEndDate = new Date(event.end_date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  useEffect(() => {
    const deleteOldEvents = async () => {
      const today = new Date().getTime();
      const endTime = new Date(event.end_date).getTime();

      if (today > endTime) {
        await destroyEvent({ event_id: event.id });
      }
    };

    deleteOldEvents();
  }, [event.end_date, event.id]);

  const toggleComments = () => {
    setCommentsInit(!commentsinit);
    console.log(`changed comments status on event ${event.id}`);
  };

  const joinEvent = async () => {
    const user_id = currentUser.id;
    const event_id = event.id;
    if (!(event.id in joinedEvents)) await joinAnEvent({ user_id, event_id });
    else {
      await leaveAnEvent({ user_id, event_id });
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
      setMap(<Map location={event.location} />);
    }, 1200);
  };

  const checkOnlineAndAttendee = () => {
    if (joinedEvents[event.id]) return true;

    return (
      (event.location === 'Online Class' && event.attendee_count < 4) ||
      event.location !== 'Online Class'
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
    if (showMap && event.location !== 'Online Class') {
      return map;
    }
    return <button onClick={mapHandler}>Load Map</button>;
  };

  return (
    <div className="event max-w-xs p-4 relative">
      {console.log(event)}
      <NavLink to={`/event/${event.id}`}>
        <img
          src={eventPictures(event.location)}
          alt="Modern Glass-Walled House"
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />
        <div className="absolute top-0 left-0 w-20 h-7 ml-8 mt-8 font-medium">
          <div className="flex flex-col space-y-2">
            {tagsArray.map((tag) => (
              <div
                className="bg-white text-center justify-center rounded-full w-40 h-7"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className=" rounded-lg">
          <h1 className="text-md font-semibold mb-4">{event.title}</h1>
          <div className="text-sm font-normal text-gray-500">
            <p className="mb-2">{event.location}</p>
            <p className="mb-2">
              {formattedStartDate} – {formattedEndDate}
            </p>
            <p className="mb-4"></p>
          </div>
        </div>
        <p>Attendents: {attendeeAmount || event.attendee_count}</p>
      </NavLink>
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
      {currentUser && currentUser.id === event.user_id ? (
        <button
          onClick={deleteEvent}
          style={{ color: 'red', textAlign: 'center' }}
        >
          Delete Event
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Event;
