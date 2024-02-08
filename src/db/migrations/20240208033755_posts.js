/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
    table.increments()
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');
    table.string('title').notNullable();
    table.timestamps(true,true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('posts');
