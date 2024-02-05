const knex = require('../knex');

class Like {

  constructor({ id, post_id, user_id, likes_amount}) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.likes_amount = likes_amount;
  }

  static async find(id) {
    const query = 'SELECT * FROM likes WHERE id = ?';
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return like ? new Like(like) : null;
  }

  static async addLike(post_id, user_id, likes_amount) {
    const query = `INSERT INTO likes (post_id, user_id, likes_amount)
      VALUES (?, ?, ?) RETURNING *`;
    const args = [post_id, user_id, likes_amount];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return new Like(like);
  }

  static async postLikes(post_id) {
    const query = 'SELECT COUNT(*) AS total_likes FROM likes WHERE post_id = ?' ;
    const args = [post_id];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return like ? like : null;
  }


  static async userLikes(user_id) {
    const query = 'SELECT * FROM likes WHERE user_id = ?';
    const args = [user_id];
    const { rows } = await knex.raw(query, args);
    return rows.map(like => new Like(like));
  }

  static async deleteLike(id) {
    const query = `DELETE FROM likes WHERE id = ? RETURNING *`;
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return new Like(like);
  }

  static async getAllLikes() {
    const query = 'SELECT * FROM likes';
    const { rows } = await knex.raw(query);
    return rows.map(like => new Like(like));
  }
}

module.exports = Like;