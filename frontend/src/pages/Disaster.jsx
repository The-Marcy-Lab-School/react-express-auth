/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useEffect, useState, useContext } from "react";
import CurrentUserContext from '../contexts/current-user-context.js';

function InfoList() {
  const { eventData, userLocation } = useContext(CurrentUserContext); // Data from MapComponent
  const events = eventData?.events;
  const data = events?.filter((event) => !event.categories.some((category) => category.title === 'Sea and Lake Ice'));

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
