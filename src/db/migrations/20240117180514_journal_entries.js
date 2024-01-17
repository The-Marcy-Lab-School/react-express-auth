
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('journal_entries', (table) => {
    table.increments().primary();
            table.string('content').notNullable();
            table.string('date').notNullable();

            table.integer('user_id');
            
            table.foreign('user_id').references('id').inTable('users');
  });
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => knex.schema.dropTable('journal_entries');
