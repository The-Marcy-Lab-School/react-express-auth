import { useContext, useEffect, useState } from "react";

export default function Comment(userPic, username, {text}){
    return <>
        <img src={userPic}></img>
        <p>{username}</p>
        <p>{text}</p>
    </>
}
