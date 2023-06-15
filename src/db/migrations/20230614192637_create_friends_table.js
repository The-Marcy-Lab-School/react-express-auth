/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('friends', (table) => {
    table.increments();
    table.integer('sender_id').references('id').inTable('users');
    table.integer('recipient_id').references('id').inTable('users');  
});
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('friends');

