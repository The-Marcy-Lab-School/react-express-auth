/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('tasks', (table) => {
  table.increments('id');
  table.string('description').notNullable();
  table.string('task_name').notNullable();
  // table.foreign('user_id').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('tasks');