/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Posts').del()
  await knex('Posts').insert([
    {Description: 'I am giving away all my Gucci clothes away', img_url: "test url", Owner_id: 1, Address: '231 Hello Street', Category: 'Clothes'},
    
  ]);
};
