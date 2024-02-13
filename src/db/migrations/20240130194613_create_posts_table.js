/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
    table.increments(); // Post ID 
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE'); // foreign key that links to the id in users
    table.string('title').notNullable(); // title of post 
    table.string('description'); // description of post 
    table.string('location') // location of where the event will take place 
    table.string('image').defaultTo('https://static01.nyt.com/images/2019/03/17/business/17recycling-jump1sub/17recycling-superJumbo.jpg').nullable() // an image to add to the post to show what its about 
    table.string('start_time').defaultTo('10:00').nullable(); // start time (user-inputted, optional)
    table.string('end_time').defaultTo('12:00').nullable(); // end time (user-inputted, optional)
    table.string('tags').defaultTo('recycling,environment,green').nullable(); // tags (user-inputted, optional)
    table.dateTime('date_created').defaultTo(knex.fn.now()); // date created, timestamp
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('posts');
