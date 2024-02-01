/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('logs', (table) =>{
    table.increments()
    table.integer('mood').notNullable();
    table.integer('abd_pain').notNullable();
    table.integer('back_pain').notNullable();
    table.integer('nausea').notNullable();
    table.integer('fatigue').notNullable();
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users')
    table.timestamps(true,true)
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('logs');
