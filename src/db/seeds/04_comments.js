/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {event_id: 1, user_id: 2, comments: 'some text'},
    {event_id: 1, user_id: 3, comments: 'some text'},
    {event_id: 3, user_id: 4, comments: 'some text'},
    {event_id: 4, user_id: 2, comments: 'some text'},
    {event_id: 3, user_id: 1, comments: 'some text'}
  ]);
};
