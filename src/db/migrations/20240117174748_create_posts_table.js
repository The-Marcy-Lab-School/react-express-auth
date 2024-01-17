/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('post', (table) => {
    table.increments('post_id');
    table.string('post_title').notNullable();
    table.string('post_content').notNullable();
    table.string('post_url').notNullable();
    table.integer('user_id')
    table.foreign('user_id').references('user_id').inTable('users');
    table.timestamps(true, true);
  });
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = (knex) => knex.schema.dropTable('posts');
  