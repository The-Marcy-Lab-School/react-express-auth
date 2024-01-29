/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('event_tags_events', (table) => {
    table.increments('id').primary();
    table.integer('event_id').references('id').inTable('events').onDelete('CASCADE');
    table.integer('event_tag_id').references('id').inTable('event_tags').onDelete('CASCADE');    

  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('event_tags_events');
