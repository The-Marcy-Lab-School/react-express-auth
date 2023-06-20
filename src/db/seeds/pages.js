/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // await knex('pages').del()
  await knex("pages").insert([
    {
      user_id: 7,
      facility_doctor: "Dr. Enrique Hernandez, MD",
      specialty: "Gynecologic Oncology",
      description:
        "Dr. Enrique Hernandez specializes in Gynecologic Oncology, with a special focus on Gynecologic Cancers, Cervical Cancer and Gestational Trophoblastic Disease.",
      address: "123 Main St, New York, NY",
      overall_rating: 4,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://cdn.castleconnolly.com/dims4/default/5259619/2147483647/strip/true/crop/100x100+0+0/resize/200x200!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.amazonaws.com%2F22%2F36%2F6c1b1f4a44dd997921c096c261bf%2Fhernandez-e-100px.jpg",
    },
    {
      user_id: 19,
      facility_doctor: "Dr. Brian Glymph, MD",
      specialty: "PHYSICIAN",
      description:
        "I strive to individualize the care I provide to each patients specific needs. I believe the relationships and rapport I develop with my patients is second to none.",
      address: "456 Elm St, New York, NY",
      overall_rating: 3,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://nacobgyn.com/wp-content/uploads/2022/08/Marketing-GCTG-Photo-BenjaminThompson-FAD-200x200.jpg",
    },
    {
      user_id: 12,
      facility_doctor: "Dr. Charity G. Wilson, MD, ABFM",
      specialty: "FAMILY MEDICINE",
      description:
        "As a Family Practice physician, I strive to promote preventive care with my patients. With todays technology, we have the opportunity to prevent so many diseases. Educating my patients in these areas is a top priority.",
      address: "789 Oak St, New York, NY",
      overall_rating: 5,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://www.theveranda.org/wp-content/uploads/2020/03/Marketing-Photo-VERA-Wilson-FAD-200x200.jpeg",
    },
    {
      user_id: 4,
      facility_doctor: "Dr. Christopher Luk, MD",
      specialty: "FAMILY MEDICINE",
      description:
        "My goal is to offer patient oriented medical care that is tailored to each individual’s needs and medical conditions based on best practice guidelines.",
      address: "321 Maple Ave, New York, NY",
      overall_rating: 2,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://www.mypmahealth.com/wp-content/uploads/2022/08/Marketing-PMA-Photo-ChristopherLuk-FAD-200x200.jpg",
    },
    {
      user_id: 27,
      facility_doctor: "Dr. Grishma Joy, MD",
      specialty: " Gastroenterology",
      description:
        "Excellent digestive care is fundamental to good health, and Gastro Health takes pride in improving our patients quality of life.",
      address: "654 Pine St, New York, NY",
      overall_rating: 4,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://www.baltimoremagazine.com/wp-content/uploads/2022/10/JOY-grishma-400x400.jpg",
    },
    // {
    //   user_id: 10,
    //   facility_doctor: "Zia Khan, MD, CMD",
    //   specialty: "Internal Medicine",
    //   description: "Dr. Khan is passionate about Internal Medicine and working closely with her patients across the Tyrone-area to help them achieve their optimal health. She went to Loyola University in Chicago, IL, and completed her doctoral training at St. George’s University School Of Medicine in True Blue, Grenada.",
    //   address: "987 Walnut St, New York, NY",
    //   overall_rating: 5,
    //   is_facility: false,
    //   is_doctor: true,
    //   photo: "https://www.peachtreemedicalcenter.com/wp-content/uploads/2016/08/Dr-Zia-Khan-200x200.jpg"
    // },
    {
      user_id: 23,
      facility_doctor: "Dr. Gonzalo Valdivia, MD",
      specialty: "Neurology",
      description:
        "Specialist in the diagnosis and treatment of neurological disorders.",
      address: "543 Cedar St, New York, NY",
      overall_rating: 3,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://orthopediccenter.net/wp-content/uploads/2021/01/Marketing-JTOB-Photo-GonzaloValdivia-FAD-200x200.jpg",
    },
    {
      user_id: 15,
      facility_doctor: "Dr. Christopher Luk, MD",
      specialty: "Gastroenterology",
      description:
        "Gastroenterologist with expertise in digestive system disorders.",
      address: "876 Oak St, New York, NY",
      overall_rating: 4,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://www.mypmahealth.com/wp-content/uploads/2022/08/Marketing-PMA-Photo-ChristopherLuk-FAD-200x200.jpg",
    },
    {
      user_id: 31,
      facility_doctor: "Dr. Jason McGowan",
      specialty: "Urology",
      description:
        "Expert urologist specializing in the urinary system and male reproductive organs.",
      address: "789 Pine St, New York, NY",
      overall_rating: 3,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://www.neurosurgeryone.com/wp-content/uploads/2021/03/Jason_McGowan-200x200.jpg",
    },
    {
      user_id: 3,
      facility_doctor: "Dr. Bhuvanesh Singh, MD/PhD",
      specialty: "Otolaryngology",
      description:
        "Dr. Bhuvanesh Singh specializes in Otolaryngology, with a special focus on Head & Neck Cancer & Surgery and Thyroid Cancer & Surgery",
      address: "16 E 60th St Fl 4 New York, NY 10022",
      overall_rating: 4,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://cdn.castleconnolly.com/dims4/default/9f22ac2/2147483647/strip/true/crop/300x300+0+0/resize/200x200!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.amazonaws.com%2F46%2F7f%2F4855c7a94bd782e14bcc0479d8b2%2Fsingh-bhuvanesh.jpg",
    },
    {
      user_id: 8,
      facility_doctor: "Dr. Lawrence Adjei, MD",
      specialty: "Psychiatry",
      description:
        "Psychiatrist providing compassionate care for mental health conditions.",
      address: "123 Cedar St, New York, NY",
      overall_rating: 3,
      is_facility: false,
      is_doctor: true,
      photo:
        "https://www.aldamedicalcenter.com/wp-content/uploads/2015/06/AMC-Lawrence-200x200.jpg",
    },
  ]);
};
