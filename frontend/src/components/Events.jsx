/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useEffect, useState, useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context.js';
import DisasterPopupMain from './UserFeed.jsx';
import { apiFetchHandler } from '../utils.js';

// ------------------List of Events ----------------
function EventList() {
  const [events, setEvents] = useState([]);
  const [alert, setAlert] = useState([]);
  const [userAlert, setUserAlert] = useState([]);
  const { updateEventData, updateAlertData, userLocation, updateUserAlertData, setUserAlertData, currentUser } = useContext(CurrentUserContext);

  const fetchEvents = () => {
    fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=20')
      .then((response) => response.json())
      .then((data) => {
        const filteredEvents = data.events.filter((event) => !event.categories.some((category) => category.title === 'Sea and Lake Ice'));

        setEvents(filteredEvents);
        updateEventData(data);
        // console.log("DATA:", data);

        // Store the data in local storage
        localStorage.setItem('eventsData', JSON.stringify(data));
      })
      .catch((error) => console.log(error));
  };

  const fetchProcessed = async () => {
    const data = await apiFetchHandler('/api/events');
    console.log("API ME DATA", data);
    setAlert(data[0]);
    updateAlertData(data[0]);
  };

  const latitude = events[0]?.geometry[0]?.coordinates[0];
  const longitude = events[0]?.geometry[0]?.coordinates[1];
  const alertLatitude = alert[0]?.eventCoordinates[0][1];
  const alertLongitude = alert[0]?.eventCoordinates[0][0];
  // const coordinates = alert[0].eventCoordinates[0];

  const fetchLayers = () => {
    fetch(`https://api.weather.gov/alerts?point=${alertLatitude},${alertLongitude}`)
      .then((response) => response?.json())
      .then((data) => {
        setUserAlert(data);
        updateUserAlertData(data);
        console.log("coor:", data.features[0].properties);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (alertLatitude && alertLongitude) {
      fetchLayers();
    }
  }, [alertLatitude, alertLongitude]);

  useEffect(() => {
    fetchEvents();
    fetchProcessed();
    updateEventData();
    updateUserAlertData();
  }, []);

  const latitude2 = 80;
  const latitude1 = 75;
  const longtitude2 = 65;
  const longtitude1 = 64;
  const convertToMiles = () => {
    const math = Math.floor(
      Math.sqrt(
        (latitude2 * 69 - latitude1 * 69) * (latitude2 * 69 - latitude1 * 69)
        + (longtitude2 * 54.6 - longtitude1 * 54.6)
        * (longtitude2 * 54.6 - longtitude1 * 54.6),
      ),
    );
    return math >= 4.5 ? `${Math.ceil(math)} miles` : `${Math.floor(math)} miles`;
  };
  const eventId = events.map((event) => event.id);
  const alertProp = userAlert.features?.map((alerts) => alerts.properties);
  const alertId = alertProp?.map((a) => a.id);
  console.log(alertProp);
  return (
    <>
      <dl className="eventList">
        {alertProp?.map((a) => (
          <React.Fragment key={alertId}>
            <li>
              <a href="#">
                <div className="eventRow">
                  <div className="date">{a?.areaDesc.split(";")[0]}</div>
                  <div className="eventType" >
                    {a?.event}
                  </div>
                  <div className="eventTitle">{a?.severity}</div>
                  <div className="distance">
                    {convertToMiles(
                      latitude2,
                      latitude1,
                      longtitude2,
                      longtitude1,
                    )}
                  </div>
                </div>
              <em>   Status: {a?.certainty}</em>
              </a>
            </li>
          </React.Fragment>
        ))}
      </dl>
    </>
  );
}

function Event() {
  return (
    <>
      <EventList />
    </>
  );
}

export default Event;

/*
 <>
      <dl className="eventList">
        {events.map((event) => (
          <React.Fragment key={event.id}>
            <li>
              <a href="#">
                <div className="eventRow">
                  <div className="date">{event.geometry[0].date.slice(0, 16).replace("T", " ")}</div>
                  {event.categories.map((category) => (
                    <div className="eventType" key={category.id}>
                      {category.title}
                    </div>
                  ))}
                  <div className="eventTitle">{event.title}</div>
                  <div className="distance">
                    {convertToMiles(
                      latitude2,
                      latitude1,
                      longtitude2,
                      longtitude1,
                    )}
                  </div>
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
    </>
  );
  */