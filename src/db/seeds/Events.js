/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Events').del()
  await knex('Events').insert([
    {id: 1, Event_Name: 'Gardening', Description: 'Being outside', Address: '123 Hope St', img_url: 'testing', Owner_id: 1 },
  
  ]);
};
