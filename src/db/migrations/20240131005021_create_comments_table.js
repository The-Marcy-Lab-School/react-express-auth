/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('comments', (table) => {
    table.increments(); // Comment ID 
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE'); // foreign key that links to the id in users
    table.integer('post_id').references('id').inTable('posts').notNullable().onDelete('CASCADE'); // foreign key that links to the id in posts
    table.string('content').notNullable(); // content of comment
    table.string('time'); // the time of creation of comments
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('comments');
