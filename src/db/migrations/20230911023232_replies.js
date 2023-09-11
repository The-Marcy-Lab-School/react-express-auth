/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('replies', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable()
      table.integer('commentid').unsigned().notNullable();
      table.text('text').notNullable();
      table.timestamps(true, true);
    });
  }
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('replies');
  };
