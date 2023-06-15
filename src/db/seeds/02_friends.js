/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friends').del()
  await knex('friends').insert([
    {id: 1, sender_id: 1, recipient_id: 2,},
    {id: 2, sender_id: 1, recipient_id: 3,},
    {id: 3, sender_id: 1, recipient_id: 4,},
    {id: 4, sender_id: 2, recipient_id: 4,},
    {id: 5, sender_id: 2, recipient_id: 3,},
    {id: 6, sender_id: 3, recipient_id: 4,},
    {id: 7, sender_id: 3, recipient_id: 5,},
  ]);
};
