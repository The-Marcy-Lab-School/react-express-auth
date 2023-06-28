/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('pings', table => {
    table.increments();
    table.integer('sender_id');
    table.integer('recipient_id');
    table.timestamps(true, true)
    // table.timestamp('created_at').defaultTo(knex.fn.now())
    // table.timestamp('updated_at').defaultTo(knex.fn.now())

});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('pings');
