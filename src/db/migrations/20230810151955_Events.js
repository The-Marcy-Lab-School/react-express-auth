/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('events', (table) =>{
    table.increments('id').primary();
    table.string('event_Name').notNullable();
    table.text('description').notNullable();
    table.string('address').notNullable();
    table.string('img_url').notNullable();
    table.integer('owner_id').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('events');
