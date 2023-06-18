/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('user_reviews', (table) => {
table.increments();
// table.integer('user_id').references('id').inTable('users')
// table.integer('review_id').references('id').inTable('reviews')
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('user_reviews');
}
