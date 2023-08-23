exports.up = (knex) => {
    return knex.schema.createTable('lessons', (table) => {
        table.increments();
        table.string('lessons').notNullable().unique();
        table.integer('quiz_id').unsigned().notNullable();
        //table.foreign('quiz_id').references('id').inTable('quiz_topics');
        table.integer('level_id').unsigned().notNullable();
        //table.foreign('level_id').references('level_id').inTable('quiz_questions');
        
        //table.timestamps(true, true);
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('lessons');
};

