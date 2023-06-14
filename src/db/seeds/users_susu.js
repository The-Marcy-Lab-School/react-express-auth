/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_susu').del()
  await knex('users_susu').insert([
    // { make_payments: 123},
    {id: 2, user_id: 2, susu_id: 2, make_payments: 1234},
    {id: 3, user_id: 3, susu_id: 3, make_payments: 12345},
  ]);
};
