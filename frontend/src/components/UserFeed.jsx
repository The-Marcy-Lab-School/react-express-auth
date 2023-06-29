/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useEffect, useState, useContext } from "react";
import CurrentUserContext from '../contexts/current-user-context.js';

const DisasterPopupMain = () => {
    const { userLocation, updateEventData, alertData, userAlertData, currentUser } = useContext(CurrentUserContext);

    if (alertData !== null) {
        const alertEvent = alertData[0]?.event;
        const description = alertData[0]?.description;
        const headline = alertData[0]?.headline;
        const instruction = alertData[0]?.instruction;
        const severity = alertData[0]?.severity;
        let nearByUsers = alertData[0]?.nearByUsers;
        nearByUsers = ["Mahdi Wood ", "Danyal Browning "];

        console.log(alertData);

        return (
            <>
                {currentUser && (
                    <div className="main-disaster">
                        <dl className="disasterList">
                            <React.Fragment key={alertData.length}>
                                <li>
                                    <a href="#">
                                        <div className="disasterRow">
                                            <div className="disasterTitle">{alertEvent}</div>
                                            <div className="disasterDate">{headline}</div>
                                        </div>

                                        <dd className="disasterDd">
                                            <em>{description}</em>
                                        </dd>
                                    </a>
                                    <div className="disasterDetails">
                                        <div className="disasterLocation">{instruction}</div>
                                        <div className="disasterTime">DISASTER LEVEL: {severity}</div>
                                        <div className="disasterParticipants">Participants: {nearByUsers} </div>
                                    </div>
                                </li>
                            </React.Fragment>
                        </dl>
                        <div className='user-disaster'>

                        </div>
                    </div>
                )}
            </>
        );
    }
};

export default DisasterPopupMain;
