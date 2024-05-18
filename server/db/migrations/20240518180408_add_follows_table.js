/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('follows', (table) => {
    table.increments();
    table.integer('follower_user_id').notNullable();
    table.foreign('follower_user_id').references('id').inTable('users');
    table.integer('following_user_id').notNullable();
    table.foreign('following_user_id').references('id').inTable('users');

    table.unique(['following_user_id', 'follower_user_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('follows');
