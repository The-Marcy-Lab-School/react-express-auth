/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = (knex) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  knex.schema.createTable('tags', (table) => {
    table.increments('tag_id').primary();
    table.string('name');

    table.integer('page_id').nullable();

    table.index('page_id');

    table.foreign('page_id').references('pages.page_id');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('tags');
