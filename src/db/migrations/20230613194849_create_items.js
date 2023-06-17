/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *  
 */
exports.up = (knex) => {
    return knex.schema.createTable("items",(table)=>{
        table.increments("id").primary();
        table.string("product_name");
        table.integer("ecoscore_grade");
        table.string("ingredients_text");
        table.string("additives_original_tags");
        table.string("image_front_thumb_url");
        table.string("stores");
        table.string("nutriscore_grade");
        table.string("nova_group");
    })
    };
    /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
    exports.down = (knex) => {
        return knex.schema.dropTable("items")
    };
