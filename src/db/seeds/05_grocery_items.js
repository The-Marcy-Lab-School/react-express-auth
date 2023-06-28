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
              { grocery_list_id: 1, item_id: 20341046 },
              { grocery_list_id: 3, item_id: 3017620422003 },
              { grocery_list_id: 2, item_id: 20341046 },
              { grocery_list_id: 3, item_id: 8002270014901 },
              { grocery_list_id: 2, item_id: 7622300336738 },
              { grocery_list_id: 3, item_id: 7622300336738 },
              
            ]);
          };