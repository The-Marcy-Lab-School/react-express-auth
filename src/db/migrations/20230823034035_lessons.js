exports.up = (knex) => {
    return knex.schema.createTable('lessons', (table) => {
        table.increments();
        table.string('lessons').notNullable();
        table.integer('level_id').unsigned().notNullable();
        table.integer('quiz_id').unsigned().notNullable();
        table.foreign('quiz_id').references('id').inTable('quiz_questions');
        table.foreign('level_id').references('id').inTable('quiz_questions');
        
        table.timestamps(true, true);
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('lessons');
};
