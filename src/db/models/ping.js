const knex = require('../knex')

class Ping {

    constructor({sender_id, recipient_id, created_at, updated_at}) {
        this.senderId = sender_id
        this.recipientId = recipient_id
        this.createdAt = created_at
        this.updatedAt = updated_at
    }

    static async create(senderId, recipientId) {
       const query = `
       INSERT INTO pings (sender_id, recipient_id)
       VALUES (?, ?)
       RETURNING *
       `
    const { rows : [ping] } = await knex.raw(query, [senderId, recipientId])
    return new Ping(ping)
    }

    static async list(recipientId) {
        const query = `
        SELECT * FROM pings
        WHERE recipient_id = ?
        `
     const { rows } = await knex.raw(query, [recipientId])
     return rows.map( ping => new Ping(ping))
     }

     static async update(pingId) {
        const query = `
        UPDATE pings
        SET updated_at = NOW()
        WHERE id = ?
        RETURNING *
        `
        const { rows: [ping] } = await knex.raw(query, [pingId])
        return new Ping(ping)
     }

}

module.exports = Ping