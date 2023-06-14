/**
     table.increments("id").primary();
        table.integer("grocery_list_id").references("id").inTable("grocery_list");
        table.integer("user_id").references("id").inTable("users");
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("user_groceries").insert([
    { id: 1, grocery_list_id: 1, user_id: 1 },
    { id: 2, grocery_list_id: 2, user_id: 2 },
    { id: 3, grocery_list_id: 3, user_id: 3 },
  ]);
};
