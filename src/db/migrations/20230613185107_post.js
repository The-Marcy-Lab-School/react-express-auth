/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable ('post', (table) => {
    table.increments('post_id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.string('img_url')
    table.string('header')
    table.text('description')
    // table.string('date_created')
    table.timestamps(true, true);

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('post');