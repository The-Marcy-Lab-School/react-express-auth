
import React, {useContext, useEffect, useState } from "react";
import { createEvent,getAllEvents } from "../adapters/events-adapter";
import { Form, Button, Col, Row, FormGroup, Label, Input } from "reactstrap";



function EventsPage() {
  
  const [events, setEvents] = useState([]); 
  const [showForm, setShowForm] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventHeader, setEventHeader] = useState("");
  const [location, setLocation] = useState("");


//////////userId////////////
 const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/me');
        if (response.ok) {
          const data = await response.json();
          setUserId(data.id);
          console.log('User ID:', data.id);
          // You can perform further operations with the userId variable here
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);


////////////////DELETE/////////////////////////////
const handleDeleteEvent = (eventId) => {
  const requestBody = {
    event_id: eventId,
  };
  console.log("delete")
  fetch("/api/events/${eventId}", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Event deletion successful");
        setEvents(events.filter((event) => event.event_id !== eventId))
        console.log("this is event"+eventId)
      } else {
        console.error("Event deletion failed");
      }
    })
    .catch((error) => {
      console.error("Event deletion error:", error);
    });
};
////////////////RSVP/////////////////////
const handleRSVPClick = (event_id) => {
      const requestBody = {
        event_id: event_id,
      };
      console.log("volun")
      fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.ok) {
            console.log("RSVP success");
          } else {
            console.error("RSVP failed");
            // Handle RSVP failure
          }
        })
        .catch((error) => {
          console.error("RSVP error:", error);
        });
    };  

////////////////GetEvents/////////////////////
    useEffect(() => {
        
      const doFetch = async () => {
          const result = await getAllEvents()
          console.log(result)
          setEvents(result)
      }
      doFetch()
  },[])

///////////////SUBMIT////////////////////


///////////////GET VOLUNTEER//////////////////

////////////////////////////////////
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      img_url: imgUrl,
      description: eventDescription,
      date: eventDate,
      time: eventTime,
      header: eventHeader,
      location: location,
    };
    //console.log(eventData)
    createEvent(eventData)
    // Update the events state with the new event data
    setEvents((prevEvents) => [...prevEvents, eventData]);

    // Reset form values
    setImgUrl("");
    setEventDescription("");
    setEventDate("");
    setEventTime("");
    setEventHeader("");
    setLocation("");
    setShowForm(false);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Events</h1>
      <button onClick={toggleFormVisibility}>Make Event</button>
      {showForm && (
        <Form onSubmit={handleFormSubmit}>
        <h1 id="events-form-header">Make an Event</h1>
        <FormGroup>
          <Label >Heading</Label>
          <Input
          type="text"
          bsSize="lg"
          id="heading-input"
          name="heading-input"
          placeholder="Heading"
          className="mb-3"
          value={eventHeader}
          onChange={(e) => setEventHeader(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
            <Label for="exampleFile">
            Upload a Pic
            </Label>
            <Input
            id="exampleFile"
            name="file"
            type="text"
            value={ imgUrl }
            onChange={(e) => setImgUrl(e.target.value)}
            /> 
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">
            Description
            </Label>
            <Input
            id="exampleText"
            name="text"
            type="textarea"
            value={ eventDescription }
            onChange={(e) => setEventDescription(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleDate">
            Date
            </Label>
            <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="text"
            value={ eventDate }
            onChange={(e) => setEventDate(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="exampleTime">
            Time
            </Label>
            <Input
            id="exampleTime"
            name="time"
            placeholder="time placeholder"
            type="time"
            value={ eventTime }
            onChange={(e) => setEventTime(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">
            Location
          </Label>
          <Input
            id="exampleAddress"
            name="address"
            placeholder="1234 Main St"
            type="text"
            value={ location }
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <Button color="success">
            Create Event
        </Button>
        </Form>
      )}
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div class = "row">
          {events.map((event) => (
            <section className="event card" key={event.event_id}>
            <div className="event-title title-block">
              <h2 className="title">{event.header}</h2>
              <p className="venue">
                <a className="link" href="#" target="_blank" aria-label="Visit venue website">
                  {event.description}
                </a>
              </p>
              <address className="address">
                <p className="streetAddress">{event.location}</p>
                <span className="locality zip">{event.header}</span>
              </address>
            </div>
            <div className="image-wrapper">
              <img className="featured-image" src={event.img_url} alt="Event" />
              <div className="overlay"></div>
            </div>
            <div className="event-date date">
              <time dateTime={event.date}>{event.date}</time>
            </div>
            <div className="event-time time">
              <time dateTime={event.time}>{event.time}</time>
            </div>
            
              {userId === event.user_id && (
                <div className="event-details" onClick={() => handleDeleteEvent(event.event_id)}>
                <a className="link details" href="#" onClick={() => handleDeleteEvent(event.event_id)}>
                  DELETE
                </a>
                </div>
              )}
            
              {userId === event.user_id && (
                   <div className="event-tickets">
                <a className="link" onClick={() => handleRSVPClick(event.event_id)}>
                  RSVP
                </a>
                </div>
              )}
              {userId !== event.user_id && (
                <div className="event-tickets full">
                <a className="link" onClick={() => handleRSVPClick(event.event_id)}>
                  RSVP
                </a>
                </div>
              )}
           
          </section>
          

          ))}
        </div>
      )}
    </div>
  );
}
export default EventsPage;


