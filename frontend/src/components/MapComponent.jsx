/* eslint-disable max-len */
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

  // console.log("event data from map:", eventData);
  
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
    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: false,
      }),
    );
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    for (let i = 0; i < data?.length; i++) {
      // const size = 200;

      // // This implements `StyleImageInterface`
      // // to draw a pulsing dot icon on the map.
      // const pulsingDot = {
      //   width: size,
      //   height: size,
      //   data: new Uint8Array(size * size * 4),

      //   // When the layer is added to the map,
      //   // get the rendering context for the map canvas.
      //   onAdd() {
      //     const canvas = document.createElement('canvas');
      //     canvas.width = this.width;
      //     canvas.height = this.height;
      //     this.context = canvas.getContext('2d');
      //   },

      //   // Call once before every frame where the icon will be used.
      //   render() {
      //     const duration = 1000;
      //     const t = (performance.now() % duration) / duration;

      //     const radius = (size / 2) * 0.3;
      //     const outerRadius = (size / 2) * 0.7 * t + radius;
      //     const context = this.context;

      //     // Draw the outer circle.
      //     context.clearRect(0, 0, this.width, this.height);
      //     context.beginPath();
      //     context.arc(
      //       this.width / 2,
      //       this.height / 2,
      //       outerRadius,
      //       0,
      //       Math.PI * 2,
      //     );
      //     context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
      //     context.fill();

      //     // Draw the inner circle.
      //     context.beginPath();
      //     context.arc(
      //       this.width / 2,
      //       this.height / 2,
      //       radius,
      //       0,
      //       Math.PI * 2,
      //     );
      //     context.fillStyle = 'rgba(255, 100, 100, 1)';
      //     context.strokeStyle = 'white';
      //     context.lineWidth = 2 + 4 * (1 - t);
      //     context.fill();
      //     context.stroke();

      //     // Update this image's data with data from the canvas.
      //     this.data = context.getImageData(
      //       0,
      //       0,
      //       this.width,
      //       this.height,
      //     ).data;

      //     // Continuously repaint the map, resulting
      //     // in the smooth animation of the dot.
      //     map.triggerRepaint();

      //     // Return `true` to let the map know that the image was updated.
      //     return true;
      //   },
      // };
      // console.log(pulsingDot); //


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

      for (const feature of mapHold.data.features) {
        map.on('load', () => {
          const el = document.createElement('div');
          el.className = 'marker';

          const userLocation = document.createElement('div');
          userLocation.className = 'userLocationPin';

          const coordinates = feature.geometry.coordinates.slice(); // Coordinates of Disasters
          const { description } = feature.properties; // Description of Disasters
          const type = feature.properties.title; // Type of Disasters

          new mapboxgl.Marker(userLocation) // User's location on MAPBOX
            .setLngLat([myLongitude, myLatitude])
            .addTo(map);

            const eventRow = document.getElementsByClassName('eventRow');
            // console.log("event row:", eventRow);

            // Access the specific element in the array
            Array.from(eventRow).forEach((element) => {
              // Add event listener to the element
              element.addEventListener('click', () => {
              // Handle the click event
              // Fly to a random location
              map.flyTo({
                center: [myLatitude, myLongitude],
                essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                });
              });
            });

          // Make a marker for each feature and add it to the map
          const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
          });

          new mapboxgl.Marker(el)
            .setLngLat(coordinates)
            .addTo(map);

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
