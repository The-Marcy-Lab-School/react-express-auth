exports.up = function (knex) {
  return knex.schema.createTable('symptom_logs', (table) => {
    table.increments('id').primary();
    table.integer('user_id')
    table.date('date');
    table.text('symptoms');
    table.string('pain_type');
    table.string('pain_location');
    table.integer('pain_level');
    table.string('doctor_type');
    table.text('other_notes');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('symptom_logs');
};
