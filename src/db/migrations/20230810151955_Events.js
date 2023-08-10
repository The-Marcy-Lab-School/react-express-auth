/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('Events', (table) =>{
    table.increments('id').primary();
    table.string('Event_Name').notNullable();
    table.text('Description').notNullable();
    table.string('Address').notNullable();
    table.string('img_url').notNullable();
    table.integer('Owner_id').references('id').inTable('users');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('Events');
