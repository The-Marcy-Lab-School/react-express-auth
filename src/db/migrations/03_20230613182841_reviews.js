/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.up = (knex) => knex.schema.createTable('reviews', (table) => {
        table.increments('review_id');
        table.integer('user_id')//.references('id').inTable('users').notNullable();
        table.integer('post_id')
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