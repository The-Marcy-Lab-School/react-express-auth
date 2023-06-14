/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('friends', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users');
    table.integer('friend_id').references('id').inTable('users');  
});
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {

}; 
