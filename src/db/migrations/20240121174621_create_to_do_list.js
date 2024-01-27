/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.string('taskname').notNullable().unique();
    table.string('description').notNullable();
    table.boolean('completed').defaultTo(false)
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('tasks');
