/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('likes').del()
  await knex.table('likes').insert([
    {user_id: 2, post_id: 1, likes_amount: 1 },
    {user_id: 3, post_id: 1, likes_amount: 1 },
    {user_id: 4, post_id: 1, likes_amount: 1 },
    {user_id: 1, post_id: 2, likes_amount: 1 },
    {user_id: 3, post_id: 2, likes_amount: 1 },
  ]);
};
