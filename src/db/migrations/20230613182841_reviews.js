/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
    exports.up = (knex) => {
      return knex.schema.createTable('reviews', (table) => {
        table.increments();
        table.integer('user_id').// references('id').inTable('users').notNullable();
        table.string('ethnicity').notNullable();
        table.string('age').notNullable();
        table.string('gender').notNullable();
        table.string('review_body').notNullable();
        table.integer('rating').notNullable();
        table.timestamps(true, true);
      });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('reviews');
}