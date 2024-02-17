import { useContext, useEffect, useState } from "react";

import { GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import { Button, FormControl, Input } from "@chakra-ui/react";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";
import { googleApi, geoCode } from "../googleApi";
import { getAllPosts } from "../adapters/post-adapter";

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
  const [cords, setCords] = useState([])
  //const [location, setLocation] = useState('')
  const { isLoaded } = googleApi()
  geoCode()

  const handleSubmit = async e => {
    try{
    e.preventDefault()
    const location = document.getElementById('location').value
    const { results } = await fromAddress(location)
    console.log(results)
    const cord = results[0].geometry.location
    setCords([...cords, cord])
    document.getElementById('location').value = ''//last think done
    }
    catch(error){
      setTimeout(() => {
        document.getElementById('location').value = ''
      }, 1000)
      document.getElementById('location').value = 'Not a valid location'
      console.error(error)
    }
  }

  const craeteCords = async (locations) => {
    const validCords = await locations.map(async location => {
      try{
        const { results } = await fromAddress(location)
        let cord = results[0].geometry.location
        //cord.key = results[0].formatted_address
        return cord
      }catch(error){
        //console.error(error)
      }
    })
    return (await Promise.all(validCords)).filter((cord) => cord)
  } 
  
  useEffect(() => {
      const getPostsCords = async () => {
        const allPosts = await getAllPosts()
        const locations = allPosts.map(post => post.location)
        const allCords = await craeteCords(locations)
        setCords(allCords)
      }
      getPostsCords()
    }, [])

  return <>
      {isLoaded ? (
        <GoogleMap
          onClick={ev => {
            console.log("latitide = ", ev.latLng.lat());
            console.log("longitude = ", ev.latLng.lng());
          }}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{ streetViewControl: false, }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {cords.length > 0 && 
            cords.map(cord => {
              return <Marker position={cord}/>
            })
          }


        </GoogleMap>
      ) : <></>}

      {isLoaded ? (
        <Autocomplete>
          <FormControl>
            <Input name='location' id='location' type="text" placeholder="Location" />
          </FormControl>
        </Autocomplete>
      ) : <></>}
      <Button type="submit" onClick={handleSubmit}>Submit</Button>

    </>
  }