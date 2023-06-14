const knex = require('../knex');

class Volunteer {
    // constructor({volunteer_id, user_id, event_id,}){
    //     this.volunteer_id = volunteer_id
    //     this.user_id = user_id
    //     this.event_id = event_id
    // }

    static async volunteer (user_id, event_id) {
        try {
          const query = `INSERT INTO volunteer (user_id, event_id)
            VALUES (?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [user_id, event_id]);
        //   console.log(post)
          return post ? post : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async allVolunteers (event_id) {
        try {
          const query = `SELECT * FROM volunteer WHERE event_id = ?`;
          const { rows } = await knex.raw(query, [event_id]);
          return rows.map((row) => new Volunteer(row));
        } catch (err) {
          console.error(err);
          return null;
        }
      }

}

// async function vol () {
//   const v =  await Volunteer.volunteer(1, 1);
//   console.log(v)
// }

// vol()

module.exports = Volunteer;