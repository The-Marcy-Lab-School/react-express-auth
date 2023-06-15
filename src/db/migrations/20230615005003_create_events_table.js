/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('events', (table) =>{
  table.increments();
  table.string('geolocation');
  table.string('description');
  table.string('title');
  table.string('type');
  table.string('img_url');
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('events');

