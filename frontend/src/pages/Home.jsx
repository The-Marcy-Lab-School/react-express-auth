import Events from "../components/Events";
import MapComponent from "../components/MapComponent";

export default function HomePage() {
  return (
    <>
      <div className="eventList">
        <Events></Events>
      </div>
      <MapComponent></MapComponent>
    </>
  );
}
