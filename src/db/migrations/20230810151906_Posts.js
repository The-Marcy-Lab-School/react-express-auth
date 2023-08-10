/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('Posts', (table) =>{
    table.increments('id').primary();
    table.text('Description').notNullable();
    table.string('img_url').notNullable();
    table.integer('Owner_id').references('id').inTable('users');
    table.string('Address').notNullable();
    table.string('Category').notNullable()
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('Posts');