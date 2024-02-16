const knex = require('../knex');

class Comment {
  static async create(user_id, event_id, text) {
    try {
      const insertQuery = `
        INSERT INTO comments (user_id, event_id, text)
        VALUES (?, ?, ?) RETURNING id`;
      const insertResult = await knex.raw(insertQuery, [user_id, event_id, text]);
      const commentId = insertResult.rows[0].id;

      const selectQuery = `
        SELECT 
          comments.id, comments.text, comments.user_id, comments.event_id, 
          users.name AS commenter_name, users.profile_pic AS commenter_profile_pic
        FROM 
          comments
        JOIN 
          users ON comments.user_id = users.id
        WHERE 
          comments.id = ?`;
      const selectResult = await knex.raw(selectQuery, [commentId]);

      console.log(selectResult.rows[0]);
      return selectResult.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async commentsOnEvent(event_id) {
    try {
      const query = `SELECT
      comments.*,
      users.name AS commenter_name,
      users.profile_pic AS commenter_profile_pic
    FROM
      comments
    JOIN
      events ON comments.event_id = events.id
    JOIN
      users ON comments.user_id = users.id
    WHERE
      events.id = ? AND comments.is_hidden = false`;
      const args = [event_id];
      console.log(args);
      const { rows } = await knex.raw(query, args);
      console.log(rows);
      return rows || [];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async commentsByUser(user_id) {
    try {
      const query = `SELECT comments.*
      FROM comments
      JOIN events ON comments.event_id = events.id
      WHERE comments.user_id = ?`;
      const args = [user_id];
      console.log(args);
      const { rows } = await knex.raw(query, args);
      console.log(rows);
      return rows || [];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async hideComment(commentId) {
    try {
      await knex('comments').where({ id: commentId }).update({ is_hidden: true });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }


}

module.exports = Comment;
