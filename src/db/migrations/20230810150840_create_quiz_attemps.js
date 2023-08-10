/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('quiz_attempts', (table) => {
        table.increments();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('quiz_id').notNullable();
        table.foreign('quiz_id').references('id').inTable('quiz_topic');
        table.integer('percentage').notNullable();
        table.integer('score_count').notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('quiz_attempts');
};