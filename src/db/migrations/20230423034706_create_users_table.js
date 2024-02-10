/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments(); // User ID 
  table.string('username').notNullable().unique(); // username for the user
  table.string('password_hash').notNullable(); // password 
  table.string('profile_image').defaultTo('default_profile_image.jpg'); // default profile image, will store base64-encoded image data
  table.string('bio').defaultTo('This user has not provided a bio.'); // default bio
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
