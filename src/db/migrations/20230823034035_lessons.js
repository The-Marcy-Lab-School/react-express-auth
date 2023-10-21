exports.up = (knex) => {
    return knex.schema.createTable('lessons', (table) => {
        table.increments();
        table.string('lessons').notNullable().unique();
        table.integer('quiz_id').notNullable();
        table.integer('level_id').unsigned().notNullable();
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('lessons');
}


