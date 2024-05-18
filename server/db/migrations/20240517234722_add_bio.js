exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.text('bio').defaultTo('');
  })
};


exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('bio');

  })
};