/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("user_account", (table) => {
  table.increments();
  table.string("email").notNullable().unique();
  table.string("username").notNullable().unique();
  table.string("password_hash").notNullable();
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("user_account");
