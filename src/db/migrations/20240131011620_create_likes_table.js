/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('likes', (table) => {
    table.increments(); // Like ID 
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE'); // foreign key that links to the id in users
    table.integer('post_id').references('id').inTable('posts').notNullable().onDelete('CASCADE'); // foreign key that links to the id in posts
    table.integer('likes_amount'); // number of likes 
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) =>  knex.schema.dropTable('likes');
