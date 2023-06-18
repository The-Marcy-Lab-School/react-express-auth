/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => { 
    return knex.schema.createTable('pages', (table) => {
    table.increments()
    table.string('facility_doctor');
    table.string('specialty');
    table.string('description');
    table.string('address');
    table.integer('overall_rating');
    table.boolean('isFacility');
    table.boolean('isDoctor');
    table.timestamps(true, true);
  });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('pages');
}
  
