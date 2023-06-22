const knex = require('../knex')

class Event {

    constructor({geolocation, description, title, type, img_url}) {
        this.location = geolocation
        this.description = description
        this.title = title
        this.type = type
        this.imgUrl = img_url
    }

    static async list () {
        const query = `
        SELECT *
        FROM events
        `
        const { rows } = await knex.raw(query)
        return rows.map( row => new Event(row))
    }


}

module.exports = Event;