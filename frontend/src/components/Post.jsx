import { useContext, useEffect, useState } from "react";

export default function Post({picSrc, title, location, time, description}){
    return <>
        <h2>{title}</h2>
        <img src={picSrc}></img>
        <p>{location}</p>
        <p>{time}</p>
        <p id='description'>{description}</p>
        

    </>
}