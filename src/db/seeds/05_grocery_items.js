/**
        table.increments("id").primary();
        table.integer("grocery_list_id").references("id").inTable("grocery_list");
        table.integer("item_id").references("id").inTable("items");
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
        exports.seed = async function (knex) {
            // Deletes ALL existing entries
          
            await knex("grocery_items_table").insert([
              { grocery_list_id: 1, item_id: 44 },
              { grocery_list_id: 3, item_id: 47 },
              { grocery_list_id: 2, item_id: 44 },
              { grocery_list_id: 3, item_id: 40 },
              { grocery_list_id: 2, item_id: 35 },
              { grocery_list_id: 3, item_id: 35 },
              
            ]);
          };