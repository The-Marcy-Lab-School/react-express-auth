/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = (knex) => knex.schema.createTable('task', (table) => {
    table.increments();
    table.string('task_name').notNullable()
     table.string('description').notNullable();
    //  table.integer('user')
    //  table.foreign('user').references('id').inTable('users');
    
    table.timestamps(true, true);
  });
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = (knex) => knex.schema.dropTable('task');

