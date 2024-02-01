/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex.table('comments').insert([
    { user_id: 2, post_id: 1, content: 'This is an amazing post!', time: '8:00 PM' },
  ]);
};
