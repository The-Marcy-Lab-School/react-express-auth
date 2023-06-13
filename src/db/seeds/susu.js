/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('susu').del()
  await knex('susu').insert([
    {id: 1, name: 'rowValue1', password_hash :'123'},
    {id: 2, name: 'rowValue2', password_hash :'123'},
    {id: 3, name: 'rowValue3', password_hash :'123'}
  ]);
};
