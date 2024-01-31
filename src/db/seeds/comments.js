/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

let comments = [
  { 
    user_id: 2,
    event_id: 1,
    text: 'Test comment',
  },
  { 
    user_id: 3,
    event_id: 2,
    text: 'YOOOOOOOOOOOOO',
  },
]
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert(comments)
};
