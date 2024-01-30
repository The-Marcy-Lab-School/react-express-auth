import React, { useState, useContext } from 'react';
import { timeObject } from '../utils';
import {
  joinAnEvent,
  leaveAnEvent,
  fetchAttendeesAmount,
  destroyEvent,
} from '../adapters/event-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import './styles/Event.css';
import Comment from './Comment';
import Comments from './Comments';
import Placeholder from './Placeholder';
import JoinButton from './JoinButton';
import Map from './Map';

const Event = (props) => {
  const { currentUser } = useContext(CurrentUserContext);

  const { event, loadJoinedEvents, joinedEvents, deleteEvent } = props;
  const [commentsinit, setCommentsInit] = useState(false);
  const [placeholderInit, setplaceholderInit] = useState(false);
  const [attendeeAmount, setAttendeeAmount] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [map, setMap] = useState('Loading...');

  const formattedStartDate = new Date(event.date).toLocaleString(
    'en-US',
    timeObject
  );
  const formattedEndDate = new Date(event.end_date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // return `${newDate.toDateString()} ${newDate.toLocaleTimeString([], {
  //   hour: '2-digit',
  //   minute: '2-digit',
  // })}`;

  const toggleComments = () => {
    setCommentsInit(!commentsinit);
    console.log(`changed comments status on event ${event.id}`);
  };
  const togglePlaceHolder = () => {
    setplaceholderInit(!placeholderInit);
    console.log(`changed placeholder status on event ${event.id}`);
  };

  const joinEvent = async () => {
    const user_id = currentUser.id;
    const event_id = event.id;
    if (!(event.id in joinedEvents)) await joinAnEvent({ user_id, event_id });
    else await leaveAnEvent({ user_id, event_id });
    setTimeout(async () => {
      await loadJoinedEvents();
    }, 100); // This is so it fetches after sign in has settled in,, should add loading MUST RE VIST
    // await loadJoinedEvents()
    setTimeout(async () => {
      const attendentAmount = await fetchAttendeesAmount(event.id);
      setAttendeeAmount(attendentAmount);
    }, 160);
  };

  const mapHandler = () => {
    setShowMap(true);
    setTimeout(() => {
      setMap(<Map location={event.location} />);
    }, 1200);
  };

  // const deleteEvent = async () => {
  //   destroyEvent({ event_id: event.id });
  //   await loadJoinedEvents();
  // };

  return (
    <div className="event">
      {currentUser.id === event.user_id ? (
        <button onClick={deleteEvent}>Delete Event</button>
      ) : (
        <p></p>
      )}
      <h3>guy who made it: {event.user_name}</h3>
      <h3>Title: {event.title}</h3>
      <h3>Location: {event.location}</h3>
      {showMap ? map : <button onClick={mapHandler}>Load Map</button>}
      <h3>Description: {event.description}</h3>
      <h3>ID: {event.id}</h3>
      <h3>Tags: {event.tag_names}</h3>
      <h3>Time: {formattedStartDate}</h3>
      <h3>Ends: {formattedEndDate}</h3>
      <h3>Attendents: {attendeeAmount || event.attendee_count}</h3>
      {event.id && (
        <JoinButton
          joinEvent={joinEvent}
          eventId={event.id}
          joinedEvents={joinedEvents}
        />
      )}{' '}
      {/*ill see if I need the && later*/}
      <button onClick={togglePlaceHolder}>Init Placeholder</button>
      {placeholderInit && <Placeholder />}
      <button onClick={toggleComments}>Init Comments</button>
      {commentsinit && <Comments eventId={event.id} />}
    </div>
  );
};

export default Event;
