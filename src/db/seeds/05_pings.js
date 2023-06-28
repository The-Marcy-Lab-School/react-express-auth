/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pings').del()
  await knex('pings').insert([
    {id: 1, sender_id: '1', recipient_id: '3'},
    {id: 2, sender_id: '1', recipient_id: '2'},
    {id: 3, sender_id: '3', recipient_id: '2'}
  ]);
};
