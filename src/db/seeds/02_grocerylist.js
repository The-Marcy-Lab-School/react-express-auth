/**
      table.increments("id").primary();
        table.integer("nova_rate");
        table.integer("nutri_score");
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
    exports.seed = async function(knex) {
        // Deletes ALL existing entries
        
        await knex('grocery_list').insert([
          {id: 1, nova_rate: 10, nutri_score: 10},
          {id: 2, nova_rate: 10, nutri_score: 10},
          {id: 3, nova_rate: 7, nutri_score: 10},
        ]);
      };