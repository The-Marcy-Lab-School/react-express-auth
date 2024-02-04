/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const event_tags = [
  { name: 'yoga' },
  { name: 'running' },
  { name: 'biking' },
  { name: 'weight-lifting' },
  { name: 'calisthenics' },
  { name: 'coaching' },
  { name: 'jogging' },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER SEQUENCE event_tags_id_seq RESTART WITH 1');
  await knex('event_tags').del();
  await knex('event_tags').insert(event_tags);
};
