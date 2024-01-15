/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  knex.schema.createTable('pages', (table) => {
    table.increments('page_id').primary().unique();
    table.string('title', 100).notNullable();
    table.json('content').nullable();
    table.timestamp('CreatedAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('UpdatedAt').notNullable().defaultTo(knex.fn.now());

    table.integer('user_id').nullable();

    // Adding indexes
    table.index('user_id');

    // Adding foreign key constraint
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('pages');
