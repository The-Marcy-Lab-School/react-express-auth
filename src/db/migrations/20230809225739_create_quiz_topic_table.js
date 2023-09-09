/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('quiz_topics', (table) => {
      table.increments();
      table.string('topic').notNullable().unique();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => {
    return knex.schema.dropTable('quiz_topics');
  };
  