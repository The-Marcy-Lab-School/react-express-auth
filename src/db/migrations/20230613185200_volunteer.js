/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable ('volunteer', (table) => {
    table.increments('volunteer_id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.integer('event_id').references('event_id').inTable('events')
    table.timestamps(true, true);

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('volunteer');