/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) =>{
    table.increments('id').primary();
    table.string('description').notNullable();
    table.string('img_url').notNullable();
    table.integer('owner_id').references('id').inTable('users');
    table.string('address').notNullable();
    table.string('category').notNullable()
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('posts');