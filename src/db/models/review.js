const knex = require('../knex');

class Reviews {
    constructor({id, user_id, review_body, rating }){
        this.id = id;
        this.user_id = user_id;
        this.review_body = review_body;
        this.rating = rating;

    }
    static async create(user_id, review_body, rating ) {
        try {
    
          const query = `
          INSERT INTO reviews (user_id, review_body, rating )
            VALUES (?, ?, ?) RETURNING *`;
          const { rows: [review] } = await knex.raw(query, [user_id, review_body, rating]);
          return new Reviews(review);
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async list() {
        const query = 'SELECT * FROM reviews';
        const { rows } = await knex.raw(query);
        return rows.map((reviews) => new Reviews(reviews));
      }

}

module.exports = Reviews;