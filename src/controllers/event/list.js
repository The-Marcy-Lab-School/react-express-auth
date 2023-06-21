

const listEvents = async (req, res) => {
    // const {
    //     session: {userId},
    //     db : {Event},
    // } = req;

    // const events =  await Event.list()
    // console.log(events)

    // if(!events.length) return res.sendStatus(404)


    // return res.send(events)

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
    const { events } = await fetchData('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=20')
    const types = ['volcanoes', 'severeStorms', 'wildfires']
    const filtered = events.filter(event => types.includes(event.categories[0].id))
    
    return res.send(filtered) 
}

module.exports = listEvents