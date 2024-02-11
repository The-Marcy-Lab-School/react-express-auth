/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex.table('comments').insert([
    { user_id: 2, post_id: 1, content: 'This is an amazing post!'},
    { user_id: 3, post_id: 1, content: 'I also agree that this is amazing!'},
    { user_id: 1, post_id: 1, content: 'This is my post!'},
    { user_id: 4, post_id: 2, content: 'test 1'},
    { user_id: 4, post_id: 2, content: 'test 2' },
    { user_id: 4, post_id: 2, content: 'test 3' },
    { user_id: 4, post_id: 2, content: 'test 4' },
    { user_id: 4, post_id: 2, content: 'test 5' },
  ]);
};
