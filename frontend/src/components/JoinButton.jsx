import './styles/button.css';

const JoinButton = (props) => {
  const { eventId, joinEvent, joinedEvents } = props;

  // const styles = {
  //   borderRadius: "5px",
  //   background: 'linear-gradient(225deg, #8be28b, #eab308)',
  //   boxShadow: '-11px 11px 18px #cacaca, 11px -11px 18px #f6f6f6',
  // };


  return (
    <div>
      <button
        onClick={joinEvent}
        // style={styles}
        className={joinedEvents[eventId] ? 'leave-event' : 'join-event'} >
        <p className='font-bold'>{joinedEvents && joinedEvents[eventId] ? 'Leave event' : 'Join Event'}</p>
      </button>
    </div>
  );
};

export default JoinButton;
