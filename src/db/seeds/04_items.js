/**
        table.increments("id").primary();
        table.string("name");
        table.integer("food_rating");
        table.integer("nutri_score_quality");
        table.string("ingredients");
        table.string("addivites");
        table.integer("nova_score");
        table.integer("eco_score");
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
        exports.seed = async function (knex) {
            // Deletes ALL existing entries
          
            await knex("items").insert([
              { id: 1, name: "apple", food_rating: 10, nutri_score_quality: 10, ingredients: "apple", addivites: "none", nova_score: 10, eco_score: 10 },
            ]);
          };