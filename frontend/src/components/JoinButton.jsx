// import './styles/button.css';

const JoinButton = (props) => {
  const { eventId, joinEvent, joinedEvents } = props;

  // const styles = {
  //   borderRadius: "5px",
  //   background: 'linear-gradient(225deg, #8be28b, #eab308)',
  //   boxShadow: '-11px 11px 18px #cacaca, 11px -11px 18px #f6f6f6',
  // };


  return (
    // className={joinedEvents[eventId] ? 'leave-event' : 'join-event'} 
    <div className='mt-4'>
      <button
        onClick={joinEvent}
        // style={styles}
        className={'flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'} style={{
          borderRadius: '5px',
          background: 'linear-gradient(225deg, #FED7AA, #EA580C)',
          // boxShadow: '-5px 5px 10px rgba(147, 197, 253, 0.5), 5px -5px 10px rgba(37, 99, 235, 0.5)',
          transition: 'boxShadow 0.3s ease-in-out'
        }} 
       >
        <p className='font-bold'>{joinedEvents && joinedEvents[eventId] ? 'Leave event' : 'Join Event'}</p>
      </button>
    </div>
  );
};

export default JoinButton;
