/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("grocery_list", (table) => {
        table.increments()
        table.string("nova_rate");
        table.integer("nutri_score");
        table.timestamp("created_at").defaultTo(knex.fn.now());
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable("grocery_list")
};

