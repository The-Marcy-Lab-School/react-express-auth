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
    const data = await response.json(); // convert incoming json data to js object
    return data; // return that data
  } catch (error) {
    console.log(error);
    return null;
  }
};
    const processed = []

    // const { events } = await fetchData('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=20')
    // const users = await fetchData('http://localhost:3000/api/users')
    // const types = ['volcanoes', 'severeStorms', 'wildfires']
    // const filtered = events.filter(event => types.includes(event.categories[0].id))
    // filtered.forEach( event => {
    //   const coords = event.geometry.map( point => point.coordinates )
    //   // console.log(coords)
    //   const usersToAdd = []
    //   users.forEach( user => {
        
    //     const { location : { latitude, longitude } } = user
    //     const where = classifyPoint(coords, [ +latitude, +longitude ]) 
    //     console.log(where)
    //     if(where < 1) {
    //       usersToAdd.push(user)
    //     }
    //   })
    //   processed.push({event, 'nearbyUsers': usersToAdd})
    // })
    // console.log(processed)

    const { features : events } = await fetchData('https://api.weather.gov/alerts/active?severity=Severe&limit=1')
    const users = await fetchData('http://localhost:3000/api/users')
    const filtered = events.filter( event => !!event.geometry)
    filtered.forEach(event => {
      const { geometry: { coordinates : [ coords ] } } = event 
      
      const usersToAdd = []
      
      users.forEach( user => {
        const { location : { latitude, longitude } } = user
        const where = classifyPoint(coords, [ +latitude, +longitude ]) 
        console.log(where)
        if(where < 1) {
          usersToAdd.push(user)
        }
      })
      processed.push({event, 'nearbyUsers': usersToAdd})
    })
    console.log(processed)

    /*
      LOOK UP RANDOM COORDINATE GENERATOR TO TEST IF THIS ALGORITHM ACTUALLY WORKS
    */
    return res.sendStatus(202) 
}

module.exports = listEvents