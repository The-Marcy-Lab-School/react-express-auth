import { useJsApiLoader } from "@react-google-maps/api"

const libraries = ['geocoding', "places"]

export const googleApi = () => {
const  googleApi = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC6KV_WibQcAJyBs7_a1tI7wutVGRER7Jo", //make into env var
    libraries: libraries
  })
return googleApi
}