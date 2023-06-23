/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
import React, { useEffect, useState, useContext } from "react";
import CurrentUserContext from '../contexts/current-user-context.js';

function InfoList() {
    const [events, setEvents] = useState([]);
    const { eventData, userLocation } = useContext(CurrentUserContext);
    const data = eventData?.events;

    console.log("Current", userLocation)
}

const Disaster = () => (
    <div>
        <InfoList />
        {/* Add your content here */}
    </div>
);

export default Disaster;
