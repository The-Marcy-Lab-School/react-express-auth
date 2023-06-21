/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-use-before-define */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */

import { useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import CurrentUserContext from '../contexts/current-user-context.js';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const { eventData } = useContext(CurrentUserContext); // Data from MapComponent
  const data = eventData?.events;

  // the "?" character is if it doesn't exist give undefined

  console.log("event data from map:", eventData);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJleWphZGVkIiwiYSI6ImNsaXRnZGtmNjEzc2IzanF2c2xvYW54Y28ifQ.zOjQMeR4v4rGw4_L7_-Iig';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/treyjaded/cliwe9c1002ak01qhag512fac', // style URL
      center: [-74.5, 40], // starting position [lng, lat] NJ = [-74.5, 40]
      zoom: 9, // starting zoom
    });

    for (let i = 0; i < data?.length; i++) {
      const latitude = data[i].geometry[0]?.coordinates[0];
      const longitude = data[i].geometry[0]?.coordinates[1];
      
      const { title } = data[i];
      const eventType = data[i].categories[0].title;
        
      // console.log("Latitude:", latitude);
      // console.log("Longitude:", longitude);

      const geojson = {
        type: 'FeatureCollection',
        features: [{ 
          type: 'Feature',
          geometry: {
          type: 'Point',
          coordinates: [latitude, longitude],
          },
          properties: {
          title: `${eventType}`,
          description: `${title}`,
          },
        }],
      };
    // Add markers to map ======================================================
      for (const feature of geojson.features) {
      // Create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';
      
      const userLocation = document.createElement('div');
      userLocation.className = 'userLocationPin';

      
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      

      function showPosition(position) {
        const myLatitude = position?.coords.latitude; 
        const myLongitude = position?.coords.longitude;
        
        new mapboxgl.Marker(userLocation)
        .setLngLat([myLongitude, myLatitude])
        .addTo(map);
        console.log(`Latitude: ${myLatitude} Longitude: ${myLongitude}`);
      }


    // Make a marker for each feature and add it to the map

      new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
      // Create a popup for the marker
      el.addEventListener('mouseenter', () => {
      // Add event listeners to show/hide the popup
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
        new mapboxgl.Popup({ offset: 35 }) // add popups
        .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`),
        ).addTo(map);
        });
      }
    }
  }, [data]);
// [-74.5, 40]
return (<div id="map"></div>);
};
export default MapComponent;

