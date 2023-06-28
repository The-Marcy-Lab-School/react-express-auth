const knex = require('../knex');

class Volunteer {
    constructor({volunteer_id, user_id, event_id,}){
        this.volunteer_id = volunteer_id
        this.user_id = user_id
        this.event_id = event_id
    }

    static async volunteer (user_id, event_id) {
        try {
          const query = `INSERT INTO volunteer (user_id, event_id)
            VALUES (?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [user_id, event_id]);
          return post ? post : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      // static async allVolunteers (event_id) {
      //   try {
      //     const query = `SELECT * FROM volunteer WHERE event_id = ?`;
      //     const { rows } = await knex.raw(query, [event_id]);
      //     return rows.map((row) => new Volunteer(row));
      //   } catch (err) {
      //     console.error(err);
      //     return null;
      //   }
      // }

      static async listAll() {
        try {
          const query = 'SELECT * FROM volunteer';
          const { rows } = await knex.raw(query);
          //console.log("rowss"+ rows)
          return rows
        } catch (err) {
          console.error(err);
          return null;
        }

        }

        static async find(id) {
          const query = `
            SELECT *
            FROM volunteer
            JOIN events ON volunteer.event_id = events.event_id
            WHERE volunteer.user_id = ?
          `;
          const { rows: [volunteer] } = await knex.raw(query, [id]);
          return volunteer ? new Volunteer(volunteer.id) : null;
        }
      

}


module.exports = Volunteer;