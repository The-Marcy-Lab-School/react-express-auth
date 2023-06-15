/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('checkIns', (table) => {
    table.increments();
    table.integer('event_id').references('id').inTable('events');  
    table.integer('user_id').references('id').inTable('users');
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('checkIns');

