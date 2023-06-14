/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>knex.schema.createTable('users_susu', (table) => {
  table.increments();
  table.integer('user_id')//.references('id').inTable('users');
  table.integer('susu_id')//.references('id').inTable('susu');
  table.string('make_payments');
  table.timestamps(true, true);

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists('users_susu');