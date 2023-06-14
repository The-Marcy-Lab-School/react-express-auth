const knex = require('../knex');

class Post {
    constructor({post_id, user_id, img_url, description, header }){
        this.post_id = post_id
        this.user_id = user_id
        this.img_url = img_url
        this.description = description
        this.header = header

    }

    static async create (user_id, img_url, description, header) {
        try {
          const query = `INSERT INTO post (user_id, img_url, description, header)
            VALUES (?, ?, ?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [user_id, img_url, description,header]);
          return post ? new Post(post) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

    static async delete (post_id)  {
        try {
          const query = `DELETE FROM posts WHERE post_id = ? RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [post_id]);
        //   console.log(post)
          return post;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async listMyPost(user_id) {
        try {
          const query = 'SELECT * FROM post WHERE user_id = ?';
          const { rows } = await knex.raw(query, [user_id]);
          return rows.map((post) => new Post(post));
        } catch (err) {
          console.error(err);
          return null;
        }

    }

        static async listAll() {
        try {
          const query = 'SELECT * FROM post';
          const { rows } = await knex.raw(query);
          return rows
        } catch (err) {
          console.error(err);
          return null;
        }

        }




}

module.exports = Post