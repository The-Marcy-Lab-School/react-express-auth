exports.up = (knex) => {
  return knex.schema.alterTable('posts', (table) => {
    table.integer('likes').defaultTo(0);
  })
};


exports.down = (knex) => {
  return knex.schema.alterTable('posts', (table) => {
    table.dropColumn('likes');
  })
};