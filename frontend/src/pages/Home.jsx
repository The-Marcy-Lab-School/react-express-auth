import { useState } from "react";

import Events from "../components/Events";
import MapComponent from "../components/MapComponent";
import SafeButton from '../components/SafeButton';

export default function HomePage() {

  return (
    <>
      <div className="home-section">
        <div className="eventList">
          <Events></Events>
      </div>
      <MapComponent></MapComponent>
      <SafeButton />
    </>
  );
}
