/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments(); // User ID 
  table.string('username').notNullable().unique(); // username for the user
  table.string('password_hash').notNullable(); // password 
  table.string('profile_image').defaultTo('https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg').nullable(); // default profile image, will store base64-encoded image data
  table.string('bio').defaultTo('This user has not provided a bio.').nullable(); // default bio
  table.dateTime('date_created').defaultTo(knex.fn.now()); // will display the data the user was created
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
