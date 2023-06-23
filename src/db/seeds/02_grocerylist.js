/**
      table.increments("id").primary();
        table.integer("nova_rate");
        table.integer("nutri_score");
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("grocery_list").insert([
    { list_name:"5/10",nova_rate: "10", nutri_score: "a" },
    { list_name:"5/12", nova_rate:"10", nutri_score: "a"},
    { list_name:"gym",nova_rate: "10", nutri_score: "a" },
  ]);
};
