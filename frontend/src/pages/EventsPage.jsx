import React, { useEffect, useState } from "react";
import { createEvent,getAllEvents } from "../adapters/events-adapter";
import {Card, Button, CardBody, CardFooter,CardImg, Col,  CardTitle, CardText,Form, FormGroup,Label, Input, Row} from 'reactstrap';
import styles from '../events.css';


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
  console.log("clicked")
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
    <div style={{
      verticalAlign:'middle',
      padding:'100px'
    }}>
      <h1 id="events-header">Events</h1>
      <button id='make-event-btn' onClick={toggleFormVisibility} style={{margin:'40px'}}>Make Event</button>
      {showForm && (
        <div id="event-form-div" style={{
          display:'flex',
          justifyContent:'center',
          padding:'40px'

        }}>
          <Card id="event-form-card">
            <Form onSubmit={handleFormSubmit} style={{
                padding:'40px'
              }}>
              <h1 id="events-form-header" style={{
                display:'flex',
                justifyContent:'center',
                alignSelf:'center'
              }}>Make an Event</h1>
              <FormGroup >
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
                  <Input
                  id="image_url"
                  name="image"
                  type="text"
                  placeholder="Image URL"
                  value={ imgUrl }
                  onChange={(e) => setImgUrl(e.target.value)}
                  /> 
              </FormGroup>
              <FormGroup>
                  <Input
                  id="eventDescription"
                  name="text"
                  type="textarea"
                  placeholder="Description"
                  value={ eventDescription }
                  onChange={(e) => setEventDescription(e.target.value)}
                  />
              </FormGroup>
                <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleDate">
                    Date
                    </Label>
                    <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                    value={ eventDate }
                    onChange={(e) => setEventDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col>
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
                </Col>
              </Row>
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
          </Card>
        </div>
      )}
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>

          <Row xs="3">
          {events.map((event, index) => (
            <div key={index}>
              <Col>
                <Card id='card' key={event.event_id}
                style={{
                  maxWidth:'320px'
                }}
                >
                    <CardImg id='card-img' src={ event.img_url } style={{
                      height:'200px',
                      maxWidth:'320px'
                    }}/>
                    <CardBody>
                      <CardTitle id="card-title">{ event.header}</CardTitle>
                      <CardText>{event.description}</CardText>
                      <CardTitle>{event.date}</CardTitle>
                      <CardTitle>{event.time}</CardTitle>
                      <CardText>{event.location}</CardText>
                    </CardBody>
                        <Button  size="lg" style={{
                          backgroundColor:'#63A46C',
                          color:'black'
                        }} onClick={ handleRSVPClick(event.event_id) }>RSVP</Button>
                  <CardFooter id='footer'>16+ People are Going!</CardFooter>
                </Card>
              </Col>
            </div>
          ))}
          </Row>
      </div>
      )}
    </div>
  );
}
export default EventsPage;


