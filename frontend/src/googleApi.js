import { useJsApiLoader } from "@react-google-maps/api"

const libraries = ["places"]
const key = import.meta.env.VITE_GOOGLE_KEY;


export const googleApi = () => {
const  googleApi = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key, //make into env var
    libraries: libraries
  })
return googleApi
}