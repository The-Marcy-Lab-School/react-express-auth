/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("grocery_list", (table) => {
        table.increments("id").primary();
        table.integer("nova_rate");
        table.integer("nutri_score");

    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable("grocery_list")
};

