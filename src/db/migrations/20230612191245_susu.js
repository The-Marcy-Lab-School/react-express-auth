/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('susu', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('password_hash').notNullable();
    table.string('owner');
    table.string('payment_amount');
    table.string('next_payment');
    table.timestamps(true, true);
  });
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => knex.schema.dropTable('susu');
