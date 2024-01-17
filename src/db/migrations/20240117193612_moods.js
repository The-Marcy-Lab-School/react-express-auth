/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('moods', (table) => {
    table.increments().primary();
    table.string('mood').notNullable();
    table.string('level').notNullable();
    table.foreign('user_id').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('moods');
