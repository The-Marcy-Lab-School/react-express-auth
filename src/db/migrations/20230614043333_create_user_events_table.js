/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable("user_events", (table) => {
  table.increments();
  table.integer("user_id").unsigned().notNullable();
  table.integer("event_id").unsigned().notNullable();
  table.timestamps(true, true);

  // Foreign keys constraints
  table
    .foreign("user_id")
    .references("id")
    .inTable("users")
    .onDelete("CASCADE");
  table
    .foreign("event_id")
    .references("id")
    .inTable("events")
    .onDelete("CASCADE");

  // Composite unique constraint so a user can't sign up for the same event twice
  table.unique(["user_id", "event_id"]);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("user_events");
