/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('moods', (table) => {
    table.increments('id').primary();
    table.string('mood').notNullable();
    table.string('level').notNullable();

    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('moods');
