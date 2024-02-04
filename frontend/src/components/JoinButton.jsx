import './styles/button.css';

const JoinButton = (props) => {
  const { eventId, joinEvent, joinedEvents } = props;

  return (
    <div>
      <button
        onClick={joinEvent}
        className={joinedEvents[eventId] ? 'leave-event' : 'join-event'}
      >
        {joinedEvents && joinedEvents[eventId] ? 'Leave event' : 'Join Event'}
      </button>
    </div>
  );
};

export default JoinButton;
