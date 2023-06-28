/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("reviews", (table) => {
    table.increments("id");
    table.integer("user_id").references("id").inTable("users").notNullable();
    table.integer("page_id").references("id").inTable("pages").notNullable();
    table.string("review_body", 500).notNullable();
    table.integer("rating").notNullable();
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("reviews");
};
