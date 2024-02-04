/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('location').notNullable();
    table.text('description');
    table.timestamp('date').defaultTo(knex.fn.now());
    table.timestamp('end_date').defaultTo(knex.fn.now());
    table.timestamp('CreatedAt').notNullable().defaultTo(knex.fn.now());
    table.integer('user_id').nullable();
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('events');
