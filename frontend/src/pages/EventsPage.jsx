import React, { useState } from "react";
import { createEvent } from "../adapters/events-adapters.js";
import * as React from "react";


function EventsPage() {
const [showForm, setShowForm] = useState(false);
// const [userId, setUserId] = useState("");
const [imgUrl, setImgUrl] = useState("");
const [eventDescription, setEventDescription] = useState("");
const [eventDate, setEventDate] = useState("");
const [eventTime, setEventTime] = useState("");
const [eventHeader, setEventHeader] = useState("");
const [location, setLocation] = useState("");


const handleFormSubmit = async (e) => {
e.preventDefault();


// Create an object with the event data
const eventData = {
// user_id: userId,
img_url: imgUrl,
description: eventDescription,
date: eventDate,
time: eventTime,
header: eventHeader,
location: location
};


try {
// Send a POST request to create the event
const response = await createEvent(eventData);
console.log(response)
if (response.ok) {
// Handle successful response, e.g., show a success message to the user
console.log("Event posted successfully!");


// Reset the form
// setUserId("");
setImgUrl("");
setEventDescription("");
setEventDate("");
setEventTime("");
setEventHeader("");
setShowForm(false);
} else {
throw new Error("Failed to post event");
}
} catch (error) {
// Handle error, e.g., show an error message to the user
console.error("Error posting event:", error);
}
};


const toggleFormVisibility = () => {
setShowForm(!showForm);
};


return (
<div>
<h1>Event Page</h1>
<button onClick={toggleFormVisibility}>Make Event</button>
{showForm && (
<form onSubmit={handleFormSubmit}>
{/* <label>
User ID:
<input
type="text"
value={userId}
onChange={(e) => setUserId(e.target.value)}
/>
</label> */}
<label>
Image URL:
<input
type="text"
value={imgUrl}
onChange={(e) => setImgUrl(e.target.value)}
/>
</label>
<label>
Event Description:
<textarea
value={eventDescription}
onChange={(e) => setEventDescription(e.target.value)}
/>
</label>
<label>
Date:
<input
type="text"
value={eventDate}
onChange={(e) => setEventDate(e.target.value)}
/>
</label>
<label>
Time:
<input
type="text"
value={eventTime}
onChange={(e) => setEventTime(e.target.value)}
/>
</label>
<label>
Header:
<input
type="text"
value={eventHeader}
onChange={(e) => setEventHeader(e.target.value)}
/>
</label>
<label>
Location:
<input
type="text"
value={location}
onChange={(e) => setLocation(e.target.value)}
/>
</label>


<button type="submit">Submit</button>
</form>
)}
</div>
);
}


export default EventsPage;
