/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useEffect, useState, useContext } from "react";
import CurrentUserContext from '../contexts/current-user-context.js';

function InfoList() {
  const [events, setEvents] = useState([]);
  const { eventData, userLocation, updateEventData } = useContext(CurrentUserContext); // Data from MapComponent

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('eventsData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const filteredEvents = parsedData?.events.filter((event) => !event.categories.some((category) => category.title === 'Sea and Lake Ice'));

      setEvents(filteredEvents);
      updateEventData(parsedData);
      console.log(parsedData);
    }
  }, []);

  return (
    <dl className="eventList">
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <li>
            <a href="#">
              <div className="eventRow">
                <div className="date">{event.geometry[0].date}</div>
                {event.categories.map((category) => (
                  <div className="eventType" key={category.id}>
                    {category.title}
                  </div>
                ))}
                <div className="eventTitle">{event.title}</div>
              </div>
              {event.description && (
                <dd>
                  <em>{event.description}</em>
                </dd>
              )}
            </a>
          </li>
        </React.Fragment>
      ))}
    </dl>
  );
}

const Disaster = () => (
  <div>
    <InfoList />
    {/* Add your content here */}
  </div>
);

export default Disaster;
