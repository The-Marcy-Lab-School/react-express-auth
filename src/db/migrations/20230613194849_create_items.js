/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable("items",(table)=>{
        table.increments("id").primary();
        table.string("name");
        table.integer("food_rating");
        table.integer("nutri_score_quality");
        table.string("ingredients");
        table.string("addivites");
        table.integer("nova_score");
        table.integer("eco_score");
        
    })
    };
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = (knex) => {
        return knex.schema.dropTable("items")
    };
