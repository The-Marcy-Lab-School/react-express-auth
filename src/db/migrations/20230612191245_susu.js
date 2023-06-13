/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('susu', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('password_hash').notNullable();
    table.string('owner');
    table.string('payment-amount');
    table.string('next-payment');
    table.timestamps(true, true);
  });
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => knex.schema.dropTable('susu');
