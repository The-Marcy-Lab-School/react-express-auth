/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Joined').del()
  await knex('Joined').insert([
    {user_id: 1, Event_id: 1},
    
  ]);
};
