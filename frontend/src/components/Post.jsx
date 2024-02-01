import { useContext, useEffect, useState } from "react";

export default function Post({picSrc, title, location, description}){
    return <>
        <h2>{title}</h2>
        <img src={picSrc}></img>
        <p>{location}</p>34
        <p id='description'>{description}</p>
        

    </>
}