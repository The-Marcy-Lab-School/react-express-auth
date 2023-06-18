/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('susu').del()
  await knex('susu').insert([
    {id: 1, name: 'Mueller Group', password_hash :'mueller', owner: 2, payment_amount: 1234, next_payment: 1231},
    {id: 2, name: 'Hoeger Group', password_hash :'hoeger', owner: 4,payment_amount: 1234, next_payment: 1231},
    {id: 3, name: 'Hickle and Sons', password_hash :'hickle', owner: 1,payment_amount: 1234, next_payment: 1231},
    {id: 4, name: 'Schuster Inc', password_hash :'schuster', owner: 3,payment_amount: 1234, next_payment: 1231}
    
  ]);
};
