import React, { useState } from 'react';

const MyComponent = () => {
  const [events, setEvents] = useState([]);
///events
  const handleButtonClick = () => {
    fetch('http://127.0.0.1:3000/api/events') // Replace with your backend API endpoint to fetch events
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.log(error));
  };
//console.log(events)
handleButtonClick()
console.log(("event testing:" + events))

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Fetch Events</button>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>{event.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
};

export default MyComponent;
