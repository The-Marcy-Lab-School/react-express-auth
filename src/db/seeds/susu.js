/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('susu').del()
  await knex('susu').insert([
    {id: 1, name: 'Mueller Group', password_hash :'mueller', owner: 1},
    {id: 2, name: 'Hoeger Group', password_hash :'hoeger', owner: 2},
    {id: 3, name: 'Hickle and Sons', password_hash :'hickle', owner: 3},
    
  ]);
};
