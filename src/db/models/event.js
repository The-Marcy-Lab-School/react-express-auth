const knex = require("../knex");

class Event {
  constructor({
    id,
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
  }) {
    this.id = id;
    this.organizer_id = organizer_id;
    this.type = type;
    this.title = title;
    this.start_date = start_date;
    this.end_date = end_date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.location = location;
    this.borough = borough;
    this.description = description;
    this.image = image;
  }

  static async list() {
    const query = "SELECT * FROM events";
    const { rows } = await knex.raw(query);
    return rows.map((event) => new Event(event));
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
    return new Event(event);
  }

  static async update(id, updatedEvent) {
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
    } = updatedEvent;
    const query = `
      UPDATE events
      SET organizer_id = ?, type = ?, title = ?, start_date = ?, end_date = ?, start_time = ?, end_time = ?, location = ?, borough = ?, description = ?, image = ?
      WHERE id = ?
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
      id,
    ]);
    return event ? new Event(event) : null;
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
