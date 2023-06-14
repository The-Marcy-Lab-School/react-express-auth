const knex = require('../knex');

class Reviews {
    constructor({id, user_id, ethnicity, age, gender, review_body, ratings }){
        this.id = id;
        this.user_id = user_id;
        this.ethinicty = ethnicity;
        this.age = age;
        this.gender = gender;
        this.review_body = review_body;
        this.ratings = ratings;

    }
    static async create(user_id, ethnicity, age, gender, review_body, ratings ) {
        try {
    
          const query = `INSERT INTO reviews (user_id, ethnicity, age, gender, review_body, ratings ) { )
            VALUES ((SELECT id FROM users WHERE id = ?), ?, ?, ?, ?, ?) RETURNING *`;
          const { rows: [review] } = await knex.raw(query, [user_id, ethnicity, age, gender, review_body, ratings]);
          return new Reviews(review);
        } catch (err) {
          console.error(err);
          return null;
        }
      }

}