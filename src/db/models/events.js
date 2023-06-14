const knex = require('../knex');

class Events {
    constructor({event_id, user_id, img_url, description, date, time, header }){
        this.event_id = event_id
        this.user_id = user_id
        this.img_url = img_url
        this.description = description
        this.date = date
        this.time = time
        this.header = header

    }

    static async create (user_id, img_url, description, date, time, header) {
        try {
          const query = `INSERT INTO events (user_id, img_url, description, date, time, header)
            VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [user_id, img_url, description, date, time, header]);
          return post ? new Events(post) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

    static async delete (event_id)  {
        try {
          const query = `DELETE FROM events WHERE event_id = ? RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [event_id]);
          return post;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async list(user_id) {
        try {
          const query = 'SELECT * FROM events WHERE user_id = ?';
          const { rows } = await knex.raw(query, [user_id]);
          return rows.map((post) => new Events(post));
        } catch (err) {
          console.error(err);
          return null;
        }
    }





}

module.exports = Events