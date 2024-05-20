const knex = require('../knex');

class Follow {
  static async create(follower_user_id, following_user_id) {
    try {
      const query = `
      INSERT INTO follows (follower_user_id, following_user_id)
      VALUES (?, ?) RETURNING *
      `;
      const { rows } = await knex.raw(query, [follower_user_id, following_user_id]);
      return rows[0]
    } catch (error) {
      return null;
    }
  }

  static async findFollowsBy(follower_user_id) {
    const query = `
    SELECT users.*
      FROM follows
      JOIN users
        ON following_user_id = users.id
      WHERE follower_user_id = ?
    `
    const { rows } = await knex.raw(query, [follower_user_id]);
    return rows;
  }

  static async findFollowersOf(following_user_id) {
    const query = `
    SELECT users.*
      FROM follows
      JOIN users
        ON follower_user_id = users.id
      WHERE following_user_id = ?
    `
    const { rows } = await knex.raw(query, [following_user_id]);
    return rows;
  }

  static async unFollow(follower_user_id, following_user_id) {
    const query = `
      DELETE FROM follows
      WHERE follower_user_id=?
        AND following_user_id=?
    `;
    await knex.raw(query, [follower_user_id, following_user_id]);
    return true;
  }

  static async deleteAllFollowsByUser(userId) {
    const query = `
      DELETE FROM follows
      WHERE follower_user_id=?
    `;
    await knex.raw(query, userId);
    return true;
  }
}


module.exports = Follow;
