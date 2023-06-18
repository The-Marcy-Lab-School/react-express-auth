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
              {"id": "44", product_name: "apple", ecoscore_grade: "good", ingredients_text: "apple", additives_original_tags: "404", image_front_thumb_url: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.536.100.jpg", stores: "cvs", nutriscore_grade: "hi", nova_group: "10"},
              {"id": "47", product_name: "Nutella-400 g", ecoscore_grade: "good", ingredients_text: "apple", additives_original_tags: "404", image_front_thumb_url: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.536.100.jpg", stores: "cvs", nutriscore_grade: "e", nova_group: "4"},
            ]);
          };