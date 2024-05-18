exports.up = (knex) => {
  return knex.schema.alterTable('posts', (table) => {
    table.text('img_public_id').defaultTo('');
  })
};


exports.down = (knex) => {
  return knex.schema.alterTable('posts', (table) => {
    table.dropColumn('img_public_id');
  })
};