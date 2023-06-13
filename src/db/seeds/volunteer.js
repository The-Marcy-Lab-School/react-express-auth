/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('volunteer').insert([
      {volunteer_id: 1, user_id: 1, event_id: '1'},
      {volunteer_id: 2, user_id: 1, event_id: '2'},
      {volunteer_id: 3, user_id: 3, event_id: '1'}
    ]);
  };
  