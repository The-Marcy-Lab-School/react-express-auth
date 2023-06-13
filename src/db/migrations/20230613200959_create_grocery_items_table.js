/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("grocery_items_table", (table) => {
        table.increments("id").primary();
        table.integer("grocery_list_id").references("id").inTable("grocery_list");
        table.integer("item_id").references("id").inTable("items");

    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable("grocery_items_table")
};
