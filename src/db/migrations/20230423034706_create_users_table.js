/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments(); // User ID 
  table.string('username').notNullable().unique(); // username for the user
  table.string('password_hash').notNullable(); // password 
  table.string('profile_image') // am image for the user's profile picture
  table.string('bio') // a bio so a user can express themselves 
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
