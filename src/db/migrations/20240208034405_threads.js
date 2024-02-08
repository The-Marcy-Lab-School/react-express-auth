/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('threads', (table) => {
    table.increments()
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');

    table.integer('post_id');
    table.foreign('post_id').references('id').inTable('posts');
    
    table.string('comment').notNullable();
    table.timestamps(true,true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('threads');
