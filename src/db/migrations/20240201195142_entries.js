/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('entries', (table) => {
    table.increments()
    table.integer('user_id');
    table.integer('log_id');
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('log_id').references('id').inTable('logs');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('entries');
