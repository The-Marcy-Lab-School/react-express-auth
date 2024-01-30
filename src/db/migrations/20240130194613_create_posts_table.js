/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
    table.increments(); // Post ID 
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE'); // foreign key that links to the id in users
    table.string('title').notNullable(); // title of post 
    table.string('description'); // description of post 
    table.string('location') // location of where the event will take place 
    table.string('image').notNullable // an image to add to the post to show what its about 
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('posts');
