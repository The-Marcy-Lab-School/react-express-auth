const knex = require('../knex');
//
class Event {
  static async recentEvents() {
    const query = `SELECT
      events.*,
      users.name AS user_name,
      users.profile_pic AS user_profile_pic,
      STRING_AGG(DISTINCT event_tags.name, ', ') AS tag_names,
      COUNT(DISTINCT event_relations.user_id) AS attendee_count
    FROM
      events
    JOIN
      event_tags_events ON events.id = event_tags_events.event_id
    JOIN
      event_tags ON event_tags_events.event_tag_id = event_tags.id
    LEFT JOIN
      event_relations ON events.id = event_relations.event_id
    LEFT JOIN
      users ON events.user_id = users.id
    GROUP BY
      events.id, events.title, users.name, users.profile_pic
    ORDER BY
      events.date ASC
    LIMIT 50;
    `;
    const { rows } = await knex.raw(query);
    return rows || [];
  }

  static async getEventsFromUser(user_id) {
    const query = `SELECT
    events.*,
    users.name AS user_name,
    users.profile_pic AS user_profile_pic,
    STRING_AGG(DISTINCT event_tags.name, ', ') AS tag_names,
    COUNT(DISTINCT event_relations.user_id) AS attendee_count
  FROM
    events
  JOIN
    event_tags_events ON events.id = event_tags_events.event_id
  JOIN
    event_tags ON event_tags_events.event_tag_id = event_tags.id
  LEFT JOIN
    event_relations ON events.id = event_relations.event_id
  LEFT JOIN
    users ON events.user_id = users.id
    WHERE
      events.user_id = ?
  GROUP BY
    events.id, events.title, users.name, users.profile_pic
  ORDER BY
    events.date ASC
  LIMIT 50;
`;
    const args = [user_id];
    console.log(args);
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }

  static async getEventsWithTag(tagName) {
    const query = `SELECT
    events.*,
    users.name AS user_name,
    users.profile_pic AS user_profile_pic,
    STRING_AGG(DISTINCT event_tags.name, ', ') AS tag_names,
    COUNT(DISTINCT event_relations.user_id) AS attendee_count
  FROM
    events
  JOIN
    event_tags_events ON events.id = event_tags_events.event_id
  JOIN
    event_tags ON event_tags_events.event_tag_id = event_tags.id
  LEFT JOIN
    event_relations ON events.id = event_relations.event_id
  LEFT JOIN
    users ON events.user_id = users.id
  WHERE
    event_tags.name = ?
  GROUP BY
    events.id, events.title, users.name, users.profile_pic
  ORDER BY
    events.date 
  LIMIT 50`;
    const args = [tagName];
    console.log(args);
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }

  static async signedUpEvents(user_id) {
    const query = `SELECT
    events.*,
    (
        SELECT name 
        FROM users 
        WHERE users.id = events.user_id
    ) AS user_name,
    (
        SELECT profile_pic 
        FROM users 
        WHERE users.id = events.user_id
    ) AS user_profile_pic,
    STRING_AGG(DISTINCT event_tags.name, ', ') AS tag_names,
    (
      SELECT COUNT(DISTINCT er.user_id)
      FROM event_relations er
      WHERE er.event_id = events.id
    ) AS attendee_count
  FROM
    events
  JOIN
    event_tags_events ON events.id = event_tags_events.event_id
  JOIN
    event_tags ON event_tags_events.event_tag_id = event_tags.id
  JOIN
    event_relations ON events.id = event_relations.event_id AND event_relations.user_id = ?
  WHERE
    events.user_id != ?
  GROUP BY
    events.id
  ORDER BY
    events.date ASC
  LIMIT 50;
  
  `;
    const args = [user_id, user_id];
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }

  static async usersInEvent(event_id) {
    const query = `SELECT users.id, users.username
    FROM users
    JOIN event_relations ON users.id = event_relations.user_id
    WHERE event_relations.event_id = ?`;
    const args = [event_id];
    const { rows } = await knex.raw(query, args);
    return rows || [];
  }

  static async countUsersInEvent(event_id) {
    const query = `
      SELECT COUNT(*) AS user_count
      FROM event_relations
      WHERE event_id = ?
    `;
    const args = [event_id];
    const { rows } = await knex.raw(query, args);
    return rows[0].user_count || 0;
  }

  static async signUpEvent(user_id, event_id) {
    try {
      const query =
        'INSERT INTO event_relations (user_id, event_id) VALUES (?,?)  RETURNING event_id';
      const args = [user_id, event_id];
      const { rows } = await knex.raw(query, args);
      return rows || [];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteRelation(user_id, event_id) {
    try {
      const query =
        'DELETE FROM event_relations where user_id = ? AND event_id = ? RETURNING event_id';
      const args = [user_id, event_id];
      const { rows } = await knex.raw(query, args);
      return rows || [];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(title, location, description, date, end_date, user_id) {
    try {
      const query = `INSERT INTO events (title, location, description, date, end_date, user_id)
      VALUES (?, ?, ?, ?, ?, ?) RETURNING id`;
      const args = [title, location, description, date, end_date, user_id];
      console.log(args);
      const { rows } = await knex.raw(query, args);
      console.log(rows);
      return rows[0].id;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async tags(event_id, event_tag_ids) {
    try {
      // Generate placeholders for the event_tag_ids
      const placeholders = event_tag_ids.map(() => '(?, ?)').join(', ');

      const query = `
        INSERT INTO event_tags_events (event_id, event_tag_id)
        VALUES ${placeholders} RETURNING *
      `;

      // makes an event_id and tag id pair for each tag id
      const args = event_tag_ids.reduce(
        (acc, tag_id) => [...acc, event_id, tag_id],
        []
      );

      const { rows } = await knex.raw(query, args);

      return rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async destroyEvent(event_id) {
    try {
      const query = `DELETE FROM events WHERE id = (?)`;
      const res = await knex.raw(query, [event_id]);
      return res.rows || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Event;

/*
INSERT INTO event_tags_events (event_id, event_tag_id)
VALUES (1, 2);

*/
