import { useJsApiLoader } from "@react-google-maps/api"
import { setDefaults } from "react-geocode";

const libraries = ["places" , 'geocoding']
const key = import.meta.env.VITE_GOOGLE_KEY;

export const googleApi = () => {
const  googleApi = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key, //make into env var
    libraries: libraries
  })
return googleApi
}

export const geoCode = () => {
  setDefaults({
  key: key, // Your API key here.
  // language: "en", // Default language for responses.
  // region: "es", // Default region for responses.
})
}