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

  return (
    <dl className='eventList'>
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <li className='eventRow'><a href="#">{event.categories.map((category) => <div key = {category.id}> <div className='date'>{ event.geometry[0].date}</div> <div className='eventType'> {category.title}</div><div className='eventTitle'>{event.title}</div></div>)} </a></li>
          {event.description && (
            <dd><em>{event.description}</em></dd>
          )}
        </React.Fragment>
      ))}
    </dl>
  );
}

// ------------------List of Layers ----------------
function LayerList() {
  const [layers, setLayers] = useState([]);

  useEffect(() => {

  }, []);

  const fetchLayers = () => {
    const eventId = "EONET_182";
    fetch(`https://eonet.gsfc.nasa.gov/api/v3/events/${eventId}?status=open&limit=5`)
      .then((response) => response.json())
      .then((event) => {
        const { categories } = event;
        const fetchLayersPromises = categories.map((category) => {
          const layerMapAPI = `https://eonet.gsfc.nasa.gov/api/v3/layers/${category.id}?status=open&limit=5`;
          // console.log("event:", event)
          return fetch(layerMapAPI).then((response) => response.json());
        });

        Promise.all(fetchLayersPromises)
          .then((layersData) => {
            const layers = layersData.flatMap((data) => data.categories[0].layers);
            setLayers(layers);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div id="eventTitle"></div>
      <dl id="layerList">
        {layers.map((layer) => (
          <React.Fragment key={layer.id}>
            <dt>{layer.name}</dt>
          </React.Fragment>
        ))}
      </dl>
    </React.Fragment>
  );
}

function Event() {
  return (
  // div className='eventList'>
     <EventList />
  );
}

export default Event;
