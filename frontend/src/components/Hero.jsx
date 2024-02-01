import { useContext, useEffect, useState } from "react";
import HeroImg from "../imgs/cosmic-trash.jpeg";

export default function Hero(){
    return <>
        <section id="hero">
            <img id="hero-img" src={HeroImg} alt="hero image" />
            <div id="hero-text">
                <h1>WE OUT HERE YESSIR</h1>
                <p>Trash, Trash, Trash</p>
            </div>
        </section>
    </>
}