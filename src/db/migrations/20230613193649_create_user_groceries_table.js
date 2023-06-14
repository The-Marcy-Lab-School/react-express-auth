/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("user_groceries", (table) => {
        table.increments("id").primary();
        table.integer("grocery_list_id").references("id").inTable("grocery_list");
        table.integer("user_id").references("id").inTable("users");

    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable("user_groceries")
};
