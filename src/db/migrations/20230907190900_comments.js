/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
      table.increments('id').primary();
      table.text('content').notNullable();
      table.integer('user_id').unsigned().notNullable();
      table.integer('discussion_board_id').unsigned().notNullable();
     // table.foreign('user_id').references('id')
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param {import("knex").Knex} knex
   * @returns {Promise<void>}
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('comments');
  };
  