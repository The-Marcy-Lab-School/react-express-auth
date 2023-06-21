const knex = require("../knex");

class UserEvent {
  static async create(userId, eventId) {
    const query = `
      INSERT INTO user_events (user_id, event_id)
      VALUES (?, ?)
      RETURNING *
    `;
    const {
      rows: [userEvent],
    } = await knex.raw(query, [userId, eventId]);

    return userEvent;
  }

  static async listJoined(userId) {
    const query = `
      SELECT events.*
      FROM user_events
      JOIN events ON user_events.event_id = events.id
      WHERE user_events.user_id = ? AND events.organizer_id != ?
    `;
    const { rows: events } = await knex.raw(query, [userId, userId]);
    return events;
  }

  static async listCreated(userId) {
    const query = `
      SELECT events.*
      FROM events
      WHERE events.organizer_id = ?
    `;
    const { rows: events } = await knex.raw(query, [userId]);
    return events;
  }

  static async delete(userId, eventId) {
    const query = `
      DELETE FROM user_events
      WHERE user_id = ? AND event_id = ?
    `;
    await knex.raw(query, [userId, eventId]);
  }

  static async deleteAll() {
    return knex("user_events").del();
  }
}

module.exports = UserEvent;

/*

list(userId) will return all events a user has joined excluding their own creation.

*/
