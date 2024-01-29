/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

let event_tags = [
  {name : "yoga"},
  {name : "running"},
  {name : "biking"},
  {name : "weight-lifting"},
  {name : "calisthenics"},
  {name : "orgy"},
  {name : "jogging"},
  {name : "small"},
  {name : "massive"},
  {name : "cardio"},
]
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('event_tags').del()
  await knex('event_tags').insert(event_tags);
};
