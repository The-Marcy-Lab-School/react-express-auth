/* eslint-disable space-before-blocks */
/* eslint-disable prefer-destructuring */
/* eslint-disable eol-last */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-use-before-define */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */

import { useEffect, useContext, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import CurrentUserContext from '../contexts/current-user-context.js';
import 'mapbox-gl/dist/mapbox-gl.css';


      


const MapComponent = () => {
  const { eventData } = useContext(CurrentUserContext); // Data from MapComponent
  const data = eventData?.events;

  const [myLatitude, setLatitude] = useState(null); // Hook is used to retrieve the geolocation data when the component mounts 
  const [myLongitude, setLongitude] = useState(null);

  // the "?" character is if it doesn't exist give undefined

  console.log("event data from map:", eventData);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      console.log(`Latitude: ${myLatitude} Longitude: ${myLongitude}`);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    function showPosition(position) {
      setLatitude(position?.coords.latitude); // Functions are used to update the state variables with the retrieved values.
      setLongitude(position?.coords.longitude);
    }
   
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJleWphZGVkIiwiYSI6ImNsaXRnZGtmNjEzc2IzanF2c2xvYW54Y28ifQ.zOjQMeR4v4rGw4_L7_-Iig';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/treyjaded/cliwe9c1002ak01qhag512fac', // style URL
      center: [myLongitude, myLatitude], // starting position [lng, lat] NJ = [-74.5, 40]
      zoom: 9, // starting zoom
    });

    for (let i = 0; i < data?.length; i++) {
      const latitude = data[i].geometry[0]?.coordinates[0];
      const longitude = data[i].geometry[0]?.coordinates[1];
      
      const { title } = data[i];
      const eventType = data[i].categories[0].title;
        
      // console.log("Latitude:", latitude);
      // console.log("Longitude:", longitude);
      
      const mapHold = {
        type: 'geojson',
          data: {
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
          },
      };
    
      // console.log("mapholddddd:", mapHold.data.features);
    
       
       
        for (const feature of mapHold.data.features){
          map.on('load', () => {
          const el = document.createElement('div');
            el.className = 'marker';
            
            const userLocation = document.createElement('div');
            userLocation.className = 'userLocationPin';
          
            const coordinates = feature.geometry.coordinates.slice(); // Coordinates of Disasters
            const description = feature.properties.description; // Description of Disasters
            const type = feature.properties.title; // Type of Disasters

            new mapboxgl.Marker(userLocation) // User's location on MAPBOX
              .setLngLat([myLongitude, myLatitude])
              .addTo(map);
              
          
            // Make a marker for each feature and add it to the map
            const popup = new mapboxgl.Popup({
              closeButton: false,
              closeOnClick: false,
              });
          
            new mapboxgl.Marker(el)
            .setLngLat(coordinates)
            .addTo(map);
            // Create a popup for the marker
            
            el.addEventListener('mouseenter', () => {
              // Change the cursor style as a UI indicator.
              map.getCanvas().style.cursor = 'pointer';
               console.log('OK WE HERE');
              // Copy coordinates array.
              
               
              // Ensure that if the map is zoomed out such that multiple
              // copies of the feature are visible, the popup appears
              // over the copy being pointed to.
              while (Math.abs(coordinates[1] - coordinates[0]) > 180) {
              coordinates[0] += coordinates[1] > coordinates[0] ? 360 : -360;
              }
               
              // Populate the popup and set its coordinates
              // based on the feature found.
              popup.setLngLat(coordinates).setHTML(`<h3>${type}</h3><p>${description}</p>`).addTo(map);
              });
               
              el.addEventListener('mouseleave', () => {
              map.getCanvas().style.cursor = '';
              popup.remove();
              });
          });
        }
    }
  }, [data, myLatitude, myLongitude]);
// [-74.5, 40]
return (<div id="map"></div>);
};
export default MapComponent;


//   }