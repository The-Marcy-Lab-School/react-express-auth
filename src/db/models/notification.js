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
    static async readNotifications( userId,){
        try {
        const query = `SELECT text from notifications
        Where recipient_id = ? `
         const args = [userId]
         const {rows} = await knex.raw(query, args)
         console.log(rows)
         return rows
        }

        catch (err){
            console.log(err)
        }
    }

    static async deleteNotifications(userId) {
        try {
            const query = `Delete  from notifications
            Where recipient_id = ?`
            const args = [userId]
            const {rows} = await knex.raw(query, args)
            return rows
        } catch (err) {
            console.log(err)
        }
    }
    static async removeANotification(userId, attendeeId) {
        try {
            const query = `Delete  from notifications
            Where recipient_id = ? AND attendee_id = ?`
            const args = [userId, attendeeId]
            const {rows} = await knex.raw(query, args)
            return rows
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Notification