/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    table.increments('event_id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.string('img_url')
    table.string('date')
    table.string('time')
    table.text('description')
    // table.string('date_created')
    table.timestamps(true, true);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {

};
