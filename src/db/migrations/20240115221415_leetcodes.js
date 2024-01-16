/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('leetcodes', (table) => {
    table.integer("leetcode_id");
    table.string('title').notNullable().unique();
    table.string('difficulty').notNullable();
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {

};
