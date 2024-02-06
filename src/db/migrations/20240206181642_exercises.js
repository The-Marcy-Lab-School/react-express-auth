/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable('exercises', (table) => {
    table.integer('id').primary();
    table.string('bodyPart');
    table.string('equipment');
    table.string('gifUrl');
    table.string('target');
    table.text('instructions');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('exercises');
