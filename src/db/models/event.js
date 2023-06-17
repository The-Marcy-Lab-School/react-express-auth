const knex = require("../knex");

class Event {
  static async list() {
    const query = `
      SELECT events.*, username 
      FROM events 
      JOIN users on events.organizer_id = users.id
    `;
    const { rows } = await knex.raw(query);
    console.log(rows);
    return rows;
  }

  static async find(id) {
    const query = "SELECT * FROM events WHERE id = ?";
    const {
      rows: [event],
    } = await knex.raw(query, [id]);
    return event ? new Event(event) : null;
  }

  static async create(newEvent) {
    const {
      organizer_id,
      type,
      title,
      start_date,
      end_date,
      start_time,
      end_time,
      location,
      borough,
      description,
      image,
    } = newEvent;
    const query = `
      INSERT INTO events (organizer_id, type, title, start_date, end_date, start_time, end_time, location, borough, description, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING *
    `;
    const {
      rows: [event],
    } = await knex.raw(query, [
      organizer_id,
      type,
      title,
      start_date,
      end_date,
      start_time,
      end_time,
      location,
      borough,
      description,
      image,
    ]);
    return event;
  }

  static async update(id, updatedEvent) {
    const [updated] = await knex("events")
      .where({ id })
      .update(updatedEvent, ["*"]);

    return updated ?? null;
  }

  static async delete(id) {
    const query = "DELETE FROM events WHERE id = ?";
    return knex.raw(query, [id]);
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE events RESTART IDENTITY CASCADE;");
  }
}

module.exports = Event;
