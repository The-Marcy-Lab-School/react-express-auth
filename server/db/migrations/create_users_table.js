exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.integer('age');
    table.string('email')
    table.string('password_hash')
    table.text('preexisting_conditions'); // created_at and updated_at
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
