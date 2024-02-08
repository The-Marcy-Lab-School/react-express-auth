const knex = require("../knex")

class Notification {
    static async create(event_id, recipient_id, attendee_id, text){
        try {
        const query = `INSERT INTO notifications (event_id, recipient_id, attendee_id, text)
         Values (?,?,?,?) RETURNING id `
         const args = [event_id, recipient_id, attendee_id, text]
         const {rows} = await knex.raw(query, args)
         console.log(rows)
         return rows[0].id;
        }

        catch (err){
            console.log(err)
        }
    }
}

module.exports = Notification