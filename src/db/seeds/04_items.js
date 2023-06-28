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
              {"id": "20341046", product_name: "Apple juice - Solevita - 2 L", ecoscore_grade: "C", ingredients_text: "made from pasteurized concentrate", additives_original_tags: "404", image_front_thumb_url: "https://images.openfoodfacts.org/images/products/20341046/front_fr.65.400.jpg", stores: "Key-Food", nutriscore_grade: "C", nova_group: "1"},
              {"id": "3017620422003", product_name: "Nutella-400 g", ecoscore_grade: "D", ingredients_text: "sugar, palm oil, hazelnut, skim milk powder, fat-reduced cocoa, soy lecithins, vanillin", additives_original_tags: "E332 , E332i", image_front_thumb_url: "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.536.100.jpg", stores: "Trade Fair", nutriscore_grade: "E", nova_group: "4"},
              {"id": "8002270014901", product_name: "S. Pellegrino Water - San Pellegrino - 1 L", ecoscore_grade: "A", ingredients_text: "water", additives_original_tags: "404", image_front_thumb_url: "https://images.openfoodfacts.org/images/products/800/227/001/4901/front_en.304.400.jpg", stores: "cvs", nutriscore_grade: "A", nova_group: "1"},
              {"id": "37622300336738", product_name: "Oreo - 154g", ecoscore_grade: "E", ingredients_text: "trigo flour, sugar, palm fat, nabina oil, lean cocoa powder 4,5%, trigo starch, glucose and fructose syrup, gasificants (potassium carbonates, ammonium carbonates, sodium carbonates), salt, emulgeants (soy lecithin, sunflower lecithin), aroma, may contain milk", additives_original_tags: "E332 , E332i", image_front_thumb_url: "https://images.openfoodfacts.org/images/products/762/230/033/6738/front_en.145.400.jpg", stores: "cvs", nutriscore_grade: "E", nova_group: "4"},
            ]);
          };