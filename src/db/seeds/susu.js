/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('susu').del()
  await knex('susu').insert([
    {id: 1, name: 'Mueller Group', password_hash :'mueller', owner: 2},
    {id: 2, name: 'Hoeger Group', password_hash :'hoeger', owner: 4},
    {id: 3, name: 'Hickle and Sons', password_hash :'hickle', owner: 5},
    {id: 4, name: 'Schuster Inc', password_hash :'schuster', owner: 3},
    {id: 5, name: 'Silicon Valley', password_hash :'silicon', owner: 2},
    {id: 6, name: 'Franklin Square', password_hash :'franklin', owner: 1},
    {id: 7, name: 'Marcy Group', password_hash :'marcy', owner: 1}
    
  ]);
};
