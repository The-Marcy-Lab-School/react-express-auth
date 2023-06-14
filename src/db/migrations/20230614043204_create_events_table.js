/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("events", (table) => {
  table.increments();
  table.integer("organizer_id").unsigned();
  table.foreign("organizer_id").references("users.id").onDelete("CASCADE");
  table.enu("type", ["Cleanup", "Exchange"]).notNullable();
  table.string("title").notNullable();
  table.date("start_date").notNullable();
  table.date("end_date");
  table.time("start_time").notNullable();
  table.time("end_time");
  table.string("location").notNullable();
  table
    .enu("borough", [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "The Bronx",
      "Staten Island",
    ])
    .notNullable();
  table.text("description").notNullable();
  table.string("image");
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("events");
