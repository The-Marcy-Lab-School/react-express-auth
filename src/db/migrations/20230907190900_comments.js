/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
      table.increments('id').primary();
      table.string('username').notNullable()
      table.text('comment').notNullable();
      table.integer('discussion_board_id').unsigned().notNullable();
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
  