const knex = require('../knex')

class Event {

    constructor({geolocation, description, title, type}) {
        this.location = geolocation
        this.description = description
        this.title = title
        this.type = type
    }


}