/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('task').del()
  await knex('task').insert([
    {task_name: 'test', description: 'first'},
  ]);
};
