/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('username').notNullable().unique();
  table.string('password_hash').notNullable();
  table.timestamps(true, true);
});

exports.up = (knex) => knex.schema.createTable('journal_entries', (table) => {
  table.increments();
  table.string('userId').not
  table.string('content');
  table.timestamps(true, true);
  
  table.foreign('journal_entries').references('user_id').inTable('users');
});
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
exports.down = (knex) =>knex.schema.dropTable('journal_entries');