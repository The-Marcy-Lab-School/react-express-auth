/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('Likes', (table) =>{
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.integer('post_id').references('id').inTable('Posts')
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('Likes');