// Note the use of alterTable and dropColumn in these functions!
exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.timestamps(true, true);
  })
};


exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  })
};
