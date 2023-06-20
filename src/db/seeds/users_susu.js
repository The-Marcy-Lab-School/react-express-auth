/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users_susu').del()
  await knex('users_susu').insert([
    // { make_payments: 123},
    {id: 1, user_id: 1, susu_id: 1, make_payments: 1234},
    {id: 2, user_id: 5, susu_id: 1, make_payments: 1234},
    {id: 3, user_id: 6, susu_id: 1, make_payments: 1234},
    {id: 4, user_id: 7, susu_id: 1, make_payments: 1234},
    {id: 5, user_id: 3, susu_id: 2, make_payments: 1234},
    {id: 6, user_id: 4, susu_id: 2, make_payments: 1234},
    {id: 7, user_id: 5, susu_id: 2, make_payments: 1234},
    {id: 8, user_id: 6, susu_id: 2, make_payments: 1234},
    {id: 9, user_id: 5, susu_id: 3, make_payments: 1234},
    {id: 10, user_id: 6, susu_id: 3, make_payments: 1234},
    {id: 11, user_id: 7, susu_id: 3, make_payments: 1234},
    {id: 12, user_id: 2, susu_id: 4, make_payments: 1234},
    {id: 13, user_id: 3, susu_id: 4, make_payments: 1234},
    {id: 14, user_id: 7, susu_id: 4, make_payments: 1234},
    {id: 15, user_id: 2, susu_id: 5, make_payments: 1234},
    {id: 16, user_id: 3, susu_id: 5, make_payments: 1234},
    {id: 17, user_id: 4, susu_id: 5, make_payments: 1234},
    {id: 18, user_id: 2, susu_id: 6, make_payments: 1234},
    {id: 19, user_id: 4, susu_id: 6, make_payments: 1234},
    {id: 20, user_id: 5, susu_id: 6, make_payments: 1234},
    {id: 21, user_id: 7, susu_id: 6, make_payments: 1234},
    {id: 22, user_id: 1, susu_id: 7, make_payments: 1234},
    {id: 23, user_id: 2, susu_id: 7, make_payments: 1234},
    {id: 24, user_id: 3, susu_id: 7, make_payments: 1234},
    {id: 25, user_id: 4, susu_id: 7, make_payments: 1234},
  ]);
};
