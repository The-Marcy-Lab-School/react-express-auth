/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('page_reviews', (table) => {
    table.increments();
    // table.integer('page_id').references('id').inTable('pages').notNullable();
    // table.integer('review_id').references('id').inTable('reviews').notNullable();
    });
    };
    
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = (knex) => {
        return knex.schema.dropTable('page_reviews');
    }