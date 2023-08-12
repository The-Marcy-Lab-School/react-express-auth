// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = (knex) => {
//     return knex.schema.createTable('quiz_questions', (table) => {
//         table.increments();
//         table.string('question').notNullable();
//         table.string('answer').notNullable();
//         table.string('wrong_answer_1').notNullable();
//         table.string('wrong_answer_2').notNullable();   
//         table.string('wrong_answer_3').notNullable();
//         table.integer('quiz_id').notNullable();
//         table.foreign('quiz_id').references('id').inTable('quizzes');
//         table.timestamps(true, true);
//     })
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = (knex) => {
//     return knex.schema.dropTable('quiz_questions');
// };



// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = (knex) => {
//     return knex.schema.createTable('quiz_questions', (table) => {
//         table.increments();
//         table.string('question').notNullable();
//         table.string('answer').notNullable();
//         table.string('wrong_answer_1').notNullable();
//         table.string('wrong_answer_2').notNullable();   
//         table.string('wrong_answer_3').notNullable();
//         table.integer('quiz_id').unsigned().notNullable(); // Use unsigned here
//         table.foreign('quiz_id').references('id').inTable('quizzes');
//         table.timestamps(true, true);
//     });
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = (knex) => {
//     return knex.schema.dropTable('quiz_questions');
// };


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('quiz_questions', (table) => {
        table.increments();
        table.string('question').notNullable();
        table.string('answer').notNullable();
        table.string('wrong_answer_1').notNullable();
        table.string('wrong_answer_2').notNullable();   
        table.string('wrong_answer_3').notNullable();
        table.integer('quiz_id').unsigned().notNullable(); // Use unsigned here
        // table.foreign('quiz_id').references('id').inTable('quizzes');
        table.timestamps(true, true);
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema.dropTable('quiz_questions');
};