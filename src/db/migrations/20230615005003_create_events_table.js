/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('events', (table) =>{
  table.increments();
  table.integer('geolocation');
  table.string('description');
  table.string('title');
  table.string('type');
  table.string('imgUrl');
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('events');

