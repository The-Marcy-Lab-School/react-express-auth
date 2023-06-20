/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("pages", (table) => {
    table.increments();
    table.integer("user_id").references('id').inTable('users');
    table.string("facility_doctor");
    table.string("specialty");
    table.string("description");
    table.string("address");
    table.integer("overall_rating");
    table.boolean("is_facility");
    table.boolean("is_doctor");
    table.string("photo");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable("pages");
};
