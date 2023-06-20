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
      static async find(id) {
        const query = 'SELECT * FROM reviews WHERE id = ?';
        const { rows: [review] } = await knex.raw(query, [id]);
        return review ? new Reviews(review) : null;
      }
      static async list() {
        const query = 'SELECT * FROM reviews';
        const { rows } = await knex.raw(query);
        return rows.map((reviews) => new Reviews(reviews));
      }
      static async delete(id) {
        try {
          await knex.raw(`DELETE FROM reviews WHERE id = ?`, [Number(id)])
          const query = `DELETE FROM reviews WHERE id = ? RETURNING *;`
          const res = await knex.raw(query, [Number(id)]);
          return res.rows[0];
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      update = async (review_body, rating) => { // dynamic queries are easier if you add more properties
        const [updatedReview] = await knex('reviews')
          .where({ id: this.id })
          .update({ review_body, rating})
          .returning('*');
        return updatedReview ? new  Reviews(updatedReview) : null;
      };
    

    }
    
module.exports = Reviews;