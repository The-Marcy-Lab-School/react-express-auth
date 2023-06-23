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
        <div className="map-section">
        <MapComponent></MapComponent>
        <SafeButton />
        </div>
      </div>
    </>
  );
}

/*

function LayerList() {
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    fetchLayers();
  }, []);

  const fetchLayers = () => {
    const eventId = "EONET_182";
    fetch(
      `https://eonet.gsfc.nasa.gov/api/v3/events/${eventId}?status=open&limit=5`
    )
      .then((response) => response.json())
      .then((event) => {
        const { categories } = event;
        const fetchLayersPromises = categories.map((category) => {
          const layerMapAPI = `https://eonet.gsfc.nasa.gov/api/v3/layers/${category.id}?status=open&limit=5`;
          // console.log("event:", event)
          return fetch(layerMapAPI).then((response) => response.json());
        });

        Promise.all(fetchLayersPromises)
          .then((layersData) => {
            const layers = layersData.flatMap(
              (data) => data.categories[0].layers
            );
            setLayers(layers);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div id="eventTitle"></div>
      <dl id="layerList">
        {layers.map((layer) => (
          <>
            <React.Fragment key={layer.id}>
              <dt>{layer.name}</dt>
            </React.Fragment>
          </>
        ))}
      </dl>
    </React.Fragment>
  );
  */
