/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('joined', (table) =>{
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.integer('event_id').references('id').inTable('events')
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('joined')
