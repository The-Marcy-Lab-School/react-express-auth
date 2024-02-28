import './styles/button.css';

const JoinButton = (props) => {
  const { eventId, joinEvent, joinedEvents } = props;

  return (
    <div>
      <button
        onClick={joinEvent}
        // style={styles}
        className={joinedEvents[eventId] ? 'leave-event' : 'join-event'}
      >
        <p className="font-bold">
          {joinedEvents && joinedEvents[eventId] ? 'Leave event' : 'Join Event'}
        </p>
      </button>
    </div>
  );
};

export default JoinButton;
