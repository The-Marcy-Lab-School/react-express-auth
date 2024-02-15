import { useContext, useEffect, useState } from "react";

import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
import { Button, FormControl, Input } from "@chakra-ui/react";
import { googleApi } from "../googleApi";

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};



export default function Map() {

  const [map, setMap] = useState(/** @type google.maps.Map */)
  const [location, setLocation] = useState('')
  const { isLoaded } = googleApi()
  const handleChange = (e) => {
    console.log(e.target.value)
    setLocation(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let loco = document.getElementById('loco')
    setLocation('')
    console.log(loco.value)

  }
  return <>
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={{ streetViewControl: false, }}
        onLoad={map => setMap(map)}
      >
        <Marker position={center} />
      </GoogleMap>
    ) : <></>}

    {isLoaded ? (
      <Autocomplete><Input name='location' id='location' type="text" value={location} onChange={handleChange} placeholder="Location"/></Autocomplete>
    ) : <></>}

  </>
}