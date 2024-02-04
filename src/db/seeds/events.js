/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const events = [
  {
    title: 'test Event 1',
    location: 'Canarsie Park',
    description: 'This is a test event description.',
    date: '2024-02-10T12:00:00Z',
    end_date: '2024-02-10T12:30:00Z',
    CreatedAt: '2024-01-10T08:00:00Z',
    user_id: 1,
  },

  {
    title: 'Intense Cardio',
    location: 'Prospect Park',
    description: 'yeae',
    date: '2024-02-11T15:30:00Z',
    end_date: '2024-02-11T12:00:00Z',
    CreatedAt: '2024-01-27T10:00:00Z',
    user_id: 2,
  },
  {
    title: 'test Event 2',
    location: 'Prospect Park',
    description: 'Jeff',
    date: '2024-02-013T15:30:00Z',
    end_date: '2024-02-13T12:00:00Z',
    CreatedAt: '2024-01-27T10:00:00Z',
    user_id: 2,
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER SEQUENCE events_id_seq RESTART WITH 1');
  await knex('events').del();
  await knex('events').insert(events);
};
