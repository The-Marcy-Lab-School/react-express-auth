const { Events } = require("pg");
const  classifyPoint = require("robust-point-in-polygon")
const listEvents = async (req, res) => {
    const {
        session: {userId},
        db : { User },
    } = req;

const fetchData = async (url) => {
  try {
    const response = await fetch(url); // use fetch
    console.log(response)
    const data = await response.json(); // convert incoming json data to js object
    return data; // return that data
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getIsPointInsidePolygon = (point, vertices ) => {
  const x = point[0]
  const y = point[1]
  
  let inside = false
  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const xi = vertices[i][0],
      yi = vertices[i][1]
    const xj = vertices[j][0],
      yj = vertices[j][1]
  
    const intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  
  return inside
  }
    const processed = []

    const { features : events } = await fetchData('https://api.weather.gov/alerts/active?severity=Severe&limit=1')
    const users = await fetchData('http://localhost:3000/api/users')
    const filtered = events.filter( event => !!event.geometry)
    filtered.forEach(event => {
      const { geometry: { coordinates : [ coords ] } } = event 
      // console.log(coords)
      const usersToAdd = []
      
      users.forEach( user => {
        const { location : { latitude, longitude } } = user
        const where = classifyPoint(coords, [ +longitude, +latitude ]) 
        // const isInside = getIsPointInsidePolygon([ +longitude, +latitude], coords)
        console.log(where)
        if(where < 1) {
          usersToAdd.push(user)
        }
      })
      processed.push({event, 'nearbyUsers': usersToAdd})
    })
    // console.log(processed)

    /*
      LOOK UP RANDOM COORDINATE GENERATOR TO TEST IF THIS ALGORITHM ACTUALLY WORKS
    */
    return res.send(processed) 
}

module.exports = listEvents