/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useEffect, useState, useContext } from "react";
import CurrentUserContext from '../contexts/current-user-context.js';

const DisasterPopupMain = () => {
    const { userLocation, updateEventData, alertData, userAlertData, currentUser } = useContext(CurrentUserContext);

    // console.log("alert info:", alertData);

    if (alertData !== null) {
        const alertEvent = alertData[0]?.event;
        const description = alertData[0]?.description;
        const headline = alertData[0]?.headline;
        const instruction = alertData[0]?.instruction;
        const severity = alertData[0]?.severity;
        let nearByUsers = alertData[0]?.nearByUsers;
        const date = alertData[0]?.headline.slice(20, 52);
        nearByUsers = ["Mahdi Wood ", "Danyal Browning "];

        return (
            <>
                {currentUser && (
                    <div className="main-disaster">
                        <dl className="disasterList">
                            <React.Fragment key={alertData.length}>
                                <li>
                                    <a href="#">
                                        <div> <li className="for-user"> {currentUser.username}'s feed today</li></div>
                                        <div className="disasterRow">
                                            <div className="disasterTitle">{alertEvent}</div>
                                            <div className="disasterHeadline">{headline}</div>
                                            <div className="disasterDate">{date}</div>
                                        </div>

                                        <div className="disasterDd">
                                            <div className="serverity">DISASTER LEVEL: {severity}</div>
                                        </div>

                                    </a>
                                    <div className="disasterDetails">
                                    <em className="description">{description}</em>
                                    </div>
                                    <div className="d">
                                    <div className="disasterLocation">{instruction}</div>
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
