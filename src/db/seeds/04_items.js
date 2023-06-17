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
              {product_name: "apple", ecoscore_grade: "good", ingredients_text: "apple", additives_original_tags: "404", image_front_thumb_url: "hi.png", stores: "cvs", nutriscore_grade: "hi", nova_group: "10",product_id: "24"},
            ]);
          };