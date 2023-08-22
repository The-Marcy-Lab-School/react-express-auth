/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('chatbox', (table) => {
      table.increments('id').primary();
      table.integer('userid').notNullable();
      table.text('ai_response').notNullable();
      table.text('user_response').notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => {
    return knex.schema.dropTable('chatbox');
  };
  