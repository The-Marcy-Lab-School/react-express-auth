import Events from "../components/Events";
import DisasterPopupMain from "../components/UserFeed";
import MapComponent from "../components/MapComponent";
import SafeButton from '../components/SafeButton';

export default function HomePage() {
  return (
    <>
      <div className="home-section">
        <div className="eventList">
          <Events></Events>
        </div>
        <div className="map-section">
        <MapComponent></MapComponent>
        <SafeButton />
        </div>
        <DisasterPopupMain />
      </div>
    </>
  );
}
