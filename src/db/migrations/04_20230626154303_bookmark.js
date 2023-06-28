/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("bookmark", (table) => {
    table.increments();
    table.integer("user_id").references("id").inTable("users");
    table.integer("page_id").references("id").inTable("pages"); // Add this line to create the "page_id" column
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("bookmark");
};
