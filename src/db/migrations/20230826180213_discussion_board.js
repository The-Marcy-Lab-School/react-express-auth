/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('discussion_boards', table => {
    table.increments('id').primary();
    table.string('topic').notNullable();
    table.text('description').notNullable();
    table.integer('user_id').unsigned().notNullable();
   // table.foreign('user_id').references('id').inTable('users');
    table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('discussion_boards');
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
