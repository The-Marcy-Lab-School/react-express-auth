/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.up = (knex) => knex.schema.createTable('reviews', (table) => {
        table.increments();
        table.integer('user_id').references('id').inTable('users').notNullable();
        // table.integer('page_id').references('id').inTable('pages').notNullable();
        table.string('review_body').notNullable();
        table.integer('rating').notNullable();
        table.timestamps(true, true);
      });


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('reviews');
}