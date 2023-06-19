/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('pages').del()
  await knex('pages').insert([
    {page_id:1, facility_name: "Dr.Albert", specialty: "Cardiology", description: "Skilled cardiologist, best in town", address:"123 Brooklyn NY", overall_rating:3,user_id:1},
    {page_id:2, facility_name: "Dr. Sarah Johnson", specialty: "Dermatology", description: "Skilled dermatologist providing skincare solutions.", address:"456 Elm Avenue, City, State", overall_rating:4, user_id:2},
    {page_id:3, facility_name: "Dr. Michael Anderson", specialty: "Orthopedics", description: "Orthopedic surgeon specializing in bone and joint surgeries.", address:"789 Oak Street, City, State", overall_rating:2, user_id:3}
  ]);
};

