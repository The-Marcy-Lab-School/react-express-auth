const { Events } = require("pg");
const turf = require("turf")
const inPolygon = require("@turf/boolean-point-in-polygon")
const listEvents = async (req, res) => {
    const {
        session: {userId},
        db : { User },
    } = req;

   
const fetchData = async (url) => {
  try {
    const response = await fetch(url); // use fetch
    const data = await response.json(); // convert incoming json data to js object
    return data; // return that data
  } catch (error) {
    console.log(error);
    return null;
  }
};
    const processed = []

    const { features : disasters } = await fetchData('https://api.weather.gov/alerts/active?severity=Severe&limit=1')
    const users = await fetchData(`http://localhost:3000/api/users`)
    const filtered = disasters.filter( disaster => !!disaster.geometry)
    filtered.forEach(disaster => {
      const { geometry: { coordinates } } = disaster 
      const polygon = turf.polygon(coordinates)
      const usersToAdd = []
      
      users.forEach( user => {
        const { location : { latitude, longitude } } = user
        const point = turf.point([+latitude, +longitude])
        const isInside = inPolygon.default(point, polygon) 
        if(isInside) {
          usersToAdd.push(user)
        }
      })
      const { properties : { 
        severity,
        event,
        headline,
        description,
        instruction,
        response
       }} = disaster
      processed.push({ 
        severity,
        event,
        headline,
        description,
        instruction,
        response,
        'nearByUsers' : usersToAdd})
    })
    return res.send(processed)
}

module.exports = listEvents