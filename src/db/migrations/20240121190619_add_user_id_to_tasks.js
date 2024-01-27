/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.table('tasks', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.table('tasks', (table) => {
      table.dropColumn('user_id');
    });
  };
