/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('event_relations').del();
  await knex('event_relations').insert([
    { user_id: 5, event_id: 2 },
    { user_id: 6, event_id: 2 },
    { user_id: 7, event_id: 2 },
    { user_id: 1, event_id: 3 },
    { user_id: 3, event_id: 1 },
    { user_id: 4, event_id: 2 },
    { user_id: 2, event_id: 1 },
    { user_id: 3, event_id: 2 },
    { user_id: 4, event_id: 5 },
    { user_id: 2, event_id: 5 },
    { user_id: 6, event_id: 1 },
  ]);
};
