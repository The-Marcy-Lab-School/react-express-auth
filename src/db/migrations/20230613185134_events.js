/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable ('events', (table) => {
    table.increments('event_id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.string('img_url')
    table.string('date')
    table.string('time')
    table.string('header')
    table.text('description')
    table.string('location')
    table.timestamps(true, true);

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('events');
