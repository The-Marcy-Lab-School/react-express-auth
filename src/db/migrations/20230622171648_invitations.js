/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('invitations', (table) => {
  table.increments('id').primary();
  table.integer('sender_id').notNullable();
  table.integer('receiver_id').notNullable();
  table.string('susu_id').notNullable();
  table.boolean('accepted').defaultTo(false);
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('invitations');