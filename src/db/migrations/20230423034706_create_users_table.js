/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => { 
  return knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('first_name');
  table.string('last_name');
  table.integer('age');
  table.string('gender');
  table.string('race');
  table.string('ethnicity');
  table.string('username').unique();
  table.string('password_hash');
  table.string('email').unique();
  table.timestamps(true, true);
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
