const knex = require('../knex');

class Like {

  constructor({ id, post_id, user_id, likes_amount}) {
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.likes_amount = likes_amount;
  }

  static async addLike() {
    const query = `INSERT INTO likes (post_id, user_id, likes_amount)
      VALUES (?, ?, ?) RETURNING *`;
    const args = [post_id, user_id, likes_amount];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return new Like(like);
  }

  static async postLikes(post_id) {
    const query = 'SELECT COUNT(likes_amount) FROM likes WHERE post_id = ?';
    const args = [post_id];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return like ? new Like(like) : null;
      
  }
  //group by or count, get a total amount of likes
  static async userLikes(user_id) {
    const query = 'SELECT COUNT(likes_amount) FROM likes WHERE user_id = ?';
    const args = [user_id];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return like ? new Like(like) : null;
  }

  static async deleteComment(id) {
    const query = `DELETE FROM likes WHERE id = ? RETURNING *`;
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const like = rows[0];
    return new Like(like);
  }
}

module.exports = Like;