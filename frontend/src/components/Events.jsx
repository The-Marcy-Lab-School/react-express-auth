/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useEffect, useState, useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context.js';

// ------------------List of Events ----------------
function EventList() {
  const [events, setEvents] = useState([]);
  const { updateEventData } = useContext(CurrentUserContext);

  const fetchEvents = () => {
    fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=20')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setEvents(data.events);
        updateEventData(data); // current event thats updated using useCONTEXT
        console.log("DATA:", data);
      })
    // console.log("DATA:",data)                                                    //GENERAL DATA
    // console.log("TYPE:",data.events[0].categories[0].title)                  //Type of Hazard Events
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEvents();
    updateEventData();
  }, []);

  function AlertList() {
    const [alert, setAlert] = useState([]);

    const latitude = events[0]?.geometry[0]?.coordinates[0];
    const longitude = events[0]?.geometry[0]?.coordinates[1];

    const fetchLayers = () => {
      console.log("latitude", latitude); console.log("longitude", longitude);
      fetch(`https://api.weather.gov/alerts?point=34.870158,-77.051228`)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          setAlert(data.events);
          console.log("ALERT DATA:", data);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
      fetchLayers();
    }, []);
  }

  return (
    <dl className='eventList'>
      <AlertList />
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <li ><a className='eventRow' href="#">{event.categories.map((category) => <div key = {category.id}> <div className='date'>{ event.geometry[0].date}</div> <div className='eventType'> {category.title}</div><div className='eventTitle'>{event.title}</div></div>)} </a></li>
          {event.description && (
            <dd><em>{event.description}</em></dd>
          )}
        </React.Fragment>
      ))}
    </dl>
  );
  // return (
  //   <React.Fragment>
  //     <div id=""></div>
  //     <dl id="layerList">
  //       {layers.map((layer) => (
  //         <React.Fragment key={layer.id}>
  //           <dt>{layer.name}</dt>
  //         </React.Fragment>
  //       ))}
  //     </dl>
  //   </React.Fragment>
  // );
}

function Event() {
  return (
    <>
    <EventList />
    </>
  );
}

export default Event;
