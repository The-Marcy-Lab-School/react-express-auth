/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("reviews", (table) => {
    table.increments();
    table.integer("user_id").references("id").inTable("users").notNullable();
    table.integer("page_id").references("id").inTable("pages").notNullable();
    table.string("review_body", 500).notNullable();
    table.integer("rating").notNullable();
    table.integer("staff_friendliness").notNullable();
    table.integer("wait_times").notNullable();
    table.integer("quality_of_care").notNullable();
    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("reviews");
};
