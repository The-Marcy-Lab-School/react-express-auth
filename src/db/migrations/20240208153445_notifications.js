/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => 
        knex.schema.createTable('notifications', (table) => {
        table.increments('id').primary();
        table.integer('event_id').unsigned().notNullable().references('id').inTable('events').onDelete('CASCADE');
        table.integer('recipient_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.integer("attendee_id").unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('text');
        table.timestamp('timestamp').defaultTo(knex.fn.now());
    })
;

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

    exports.down = (knex) => knex.schema.dropTable('notifications');

