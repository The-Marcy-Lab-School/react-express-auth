<<<<<<< HEAD

=======
import React, { useEffect, useContext, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import Event from './Events';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { DataContext } from '/Users/jaded/Development/test react/src/assets/DataContext.jsx'

const MapComponent = () => {
  // const [latitude, setLatitude] = useState([]);
  // const { data } = useContext(DataContext)

  // console.log(data)
  // const latitude = data[0]

  // const { setData } = useContext(DataContext); //Use context to store data through components
  // const eventData = latitude;

  // setData(eventData);
  // console.log("sajckanscjn:")

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJleWphZGVkIiwiYSI6ImNsaXRkYWV4czAxa28za3QzeWgzcnB5YnAifQ.Sa0yc1I-LsaVBVMIPLYzxA';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/treyjaded/cliwe9c1002ak01qhag512fac', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    //  const popup = new mapboxgl.Popup({ closeOnClick: false })
    map.on('load', () => {
      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([-74.5, 40])
        .setHTML('<h1>Hello World!</h1>')
        .addTo(map);

      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([-123.9749, 40.7736])
        .setHTML('<h1>Hey World!</h1>')
        .addTo(map);

      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([14, 23])
        .setHTML('<h1>Bonjour le monde!</h1>')
        .addTo(map);

      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([-97.91772901156455, 18.988768526321365])
        .setHTML('<h1>Hola Mundo!</h1>')
        .addTo(map);

      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([-67.67617340843067, -33.80002186085345])
        .setHTML('<h1>Olá Mundo!</h1>')
        .addTo(map);

      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([19.35052445717912, 64.63980479322365])
        .setHTML('<h1>Witaj świecie!</h1>')
        .addTo(map);

      new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([115.9518135866121, 63.20184619910259])
        .setHTML('<h1>Привет, мир!</h1>')
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
      <div id="map"></div>
  );
};

export default MapComponent;
>>>>>>> 4a5576d0f790919b9d0bf796f98543fb526c754f
