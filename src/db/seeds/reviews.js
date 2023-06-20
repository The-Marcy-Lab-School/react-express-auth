/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex('reviews').del()
  await knex('reviews').insert([
//     {
//   user_id: 4,
//   page_id: 1,
//   review_body: "My experience with this facility was uplifting. The staff treated me with warmth and provided excellent care. As a person of color, it's essential to be seen, heard, and respected within the healthcare system, and I felt that genuine inclusivity here. I wholeheartedly recommend this facility!",
//   rating: 4
// },
// {
//   user_id: 2,
//   page_id: 1,
//   review_body: "Overall, my experience with this facility was good, but there is room for improvement in terms of addressing disparities faced by people of color. The healthcare system needs to prioritize equitable care for everyone. The staff was attentive, but there were instances where I felt my concerns were not fully understood. With some changes, this facility can make a positive impact on addressing healthcare disparities.",
//   rating: 4
// },
{
  user_id: 22,
  page_id: 2,
  review_body: "The facility provided average care, but there were some issues that need attention. As a person of color, I believe more efforts should be made to address healthcare disparities and provide better access to quality care.",
  rating: 3
},
// {
//   user_id: 17,
//   page_id: 2,
//   review_body: "My experience with this facility was okay, but there were certain aspects that could be improved. I hope they take steps to ensure equal treatment and better healthcare outcomes for people of color.",
//   rating: 3
// },
// {
//   user_id: 1,
//   page_id: 2,
//   review_body: "My experience with this facility was a mixture of satisfaction and disappointment. While certain aspects met my expectations, there were instances where I felt neglected or misunderstood. It's crucial to address healthcare disparities, particularly concerning people of color, and there is room for improvement in this regard.",
//   rating: 3
// },
// {
//   user_id: 29,
//   page_id: 2,
//   review_body: "My overall experience with this facility was average. As a person of color, I believe more attention should be given to addressing healthcare disparities and providing culturally competent care.",
//   rating: 3
// },
// {
//   user_id: 1,
//   page_id: 3,
//   review_body: "My experience with this facility was truly exceptional. The staff demonstrated an unwavering commitment to providing personalized care, ensuring that my unique needs were met with utmost attention. As a person of color, it was a breath of fresh air to receive healthcare that was inclusive, respectful, and considerate. I wholeheartedly recommend this facility to individuals from all walks of life.",
//   rating: 5
// },
// {
//   user_id: 8,
//   page_id: 3,
//   review_body: "The level of care provided by this facility was outstanding. The doctors and nurses were not only highly skilled but also showed genuine compassion. They made me feel valued and addressed all my concerns. As a person of color, it's reassuring to know that such exceptional healthcare is available.",
//   rating: 5
// },
// {
//   user_id: 24,
//   page_id: 3,
//   review_body: "I had a positive experience with this facility. The quality of care provided exceeded my expectations and the staff treated me with respect and dignity throughout my entire visit. As a person of color, it's important to feel safe and well-cared for in the healthcare system, and this facility met those expectations.",
//   rating: 5
// },
// {
//   user_id: 20,
//   page_id: 4,
//   review_body: "My experience with this facility was disappointing. The quality of care provided was below average, and I felt my concerns were not taken seriously. As a person of color, I expect better treatment and equal access to healthcare. There is a need for significant improvement in addressing disparities.",
//   rating: 2
// },
// {
//   user_id: 5,
//   page_id: 4,
//   review_body: "I had a subpar experience with this facility. The staff lacked attentiveness and seemed indifferent to my needs. As a person of color, it's disheartening to encounter such disparities in the healthcare system. This facility has a long way to go in providing equitable care.",
//   rating: 2
// },
// {
//   user_id: 3,
//   page_id: 5,
//   review_body: "I had a positive overall experience with this facility. The care provided was good, and the staff was friendly. However, there is still room for improvement in addressing healthcare disparities faced by people of color. It's crucial to prioritize equitable care for everyone.",
//   rating: 4
// },
// {
//   user_id: 31,
//   page_id: 6,
//   review_body: "I had a great experience with this facility. The staff was knowledgeable, and the care provided was of high quality. As a person of color, it's encouraging to receive equitable and respectful healthcare. I highly recommend this facility!",
//   rating: 4
// },
// {
//   user_id: 22,
//   page_id: 6,
//   review_body: "Overall, I had a positive experience with this facility. The doctors and nurses were attentive and responsive to my needs. However, there were a few instances where communication could have been improved. As a person of color, I believe there should be more efforts to address healthcare disparities.",
//   rating: 4
// },
// {
//   user_id: 4,
//   page_id: 6,
//   review_body: "Regrettably, my experience with this facility fell short of my expectations. The quality of care provided was unsatisfactory, leaving me feeling overlooked and dismissed throughout my visit. As a person of color, it's disheartening to encounter such blatant disparities in the healthcare system. Urgent measures are required to address the clear need for improvement and ensure equitable care for all.",
//   rating: 2
// },
// {
//   user_id: 18,
//   page_id: 6,
//   review_body: "I had a disappointing experience with this facility. The staff lacked empathy and failed to address my concerns adequately. As a person of color, I expected better treatment and equal access to quality care. It's crucial to address the disparities faced by marginalized communities.",
//   rating: 2
// },
// {
//   user_id: 7,
//   page_id: 7,
//   review_body: "My experience with this facility was outstanding. The staff provided exceptional care and demonstrated a deep commitment to addressing healthcare disparities. As a person of color, I felt respected and well-supported throughout my visit. I highly recommend this facility to everyone.",
//   rating: 5
// },
// {
//   user_id: 10,
//   page_id: 7,
//   review_body: "I had an amazing experience with this facility. The doctors and nurses were extremely attentive and went above and beyond to ensure my comfort. As a person of color, it's crucial to receive equitable care, and this facility exceeded my expectations in that regard.",
//   rating: 5
// },
// {
//   user_id: 11,
//   page_id: 7,
//   review_body: "Overall, I had a positive experience with this facility. The care provided was of good quality, and the staff was friendly and attentive. However, there is still room for improvement in addressing healthcare disparities faced by people of color. It's important to prioritize equitable care for everyone.",
//   rating: 4
// },
// {
//   user_id: 31,
//   page_id: 7,
//   review_body: "My experience with this facility was below expectations. The quality of care provided was subpar, and I felt my concerns were disregarded. As a person of color, I expected better treatment and equal access to quality care. There is a need for significant improvement in addressing healthcare disparities.",
//   rating: 2
// },
// {
//   user_id: 16,
//   page_id: 8,
//   review_body: "My experience with this facility was mediocre. Although the care provided met basic standards, it lacked the attention to detail and personalized approach that I expected. As a person of color, I find it disheartening to witness the persistent healthcare disparities that continue to exist. It is crucial for healthcare providers to actively address these disparities and ensure equitable care for every patient.",
//   rating: 3
// },
// {
//   user_id: 4,
//   page_id: 8,
//   review_body: "Overall, my experience with this facility was decent. The staff was friendly, but there were certain aspects that could have been better. As a person of color, I believe there is room for improvement in addressing healthcare disparities and providing culturally competent care.",
//   rating: 3
// },
// {
//   user_id: 11,
//   page_id: 8,
//   review_body: "I had a mixed experience with this facility. While some aspects were satisfactory, there were areas where I felt my needs were not fully met. As a person of color, it's important to receive equitable care and have concerns addressed effectively.",
//   rating: 3
// },
// {
//   user_id: 24,
//   page_id: 9,
//   review_body: "My experience with this facility was average. The care provided was satisfactory, but there were areas that could be improved. As a person of color, I hope to see more efforts made in addressing healthcare disparities and ensuring equitable care for everyone.",
//   rating: 3
// },
// {
//   user_id: 25,
//   page_id: 9,
//   review_body: "I had an exceptional experience with this facility. The staff went above and beyond to provide personalized care, ensuring that my needs were met. As a person of color, it was refreshing to receive such inclusive and respectful healthcare. I highly recommend this facility to everyone.",
//   rating: 5
// },
// {
//   user_id: 26,
//   page_id: 10,
//   review_body: "I had a terrible experience with this facility. The quality of care provided was abysmal, and I felt neglected throughout my visit. As a person of color, it's disheartening to encounter such disparities in the healthcare system. There is a critical need for improvement.",
//   rating: 1
// },
// {
//   user_id: 10,
//   page_id: 10,
//   review_body: "I cannot speak highly enough of this facility. The quality of care surpassed my expectations. The staff treated me with utmost respect and dignity throughout my entire visit. As a person of color, it's important to feel safe and well-cared for in the healthcare system, and this facility excelled in that aspect.",
//   rating: 5
// },
// {
//   user_id: 3,
//   page_id: 10,
//   review_body: "My experience with this facility was mixed. While certain aspects were satisfactory, there were areas where I felt improvements were needed. As a person of color, it's essential to receive equitable care and have concerns addressed effectively. There is room for enhancement in addressing healthcare disparities.",
//   rating: 3
// },
// {
//   user_id: 29,
//   page_id: 11,
//   review_body: "I was disappointed by my experience with this facility. The level of care provided did not meet my expectations, and I felt neglected during my visit. As a person of color, it's disheartening to encounter such disparities in the healthcare system. There is an evident need for improvement in addressing equitable care.",
//   rating: 2
// },
// {
//   user_id: 7,
//   page_id: 11,
//   review_body: "My experience with this facility was absolutely dreadful. The care provided was shockingly unacceptable, and I felt mistreated and disrespected during my entire visit. As a person of color, it is deeply disheartening to encounter such appalling disparities in the healthcare system. Urgent and immediate action must be taken to address these deeply ingrained issues.",
//   rating: 1
// },
// {
//   user_id: 9,
//   page_id: 11,
//   review_body: "My experience with this facility was average. The quality of care provided met basic expectations, but there were areas where improvements could be made. As a person of color, it's crucial to have equitable access to healthcare and address disparities in the system for better outcomes.",
//   rating: 3
// },
// {
//   user_id: 6,
//   page_id: 12,
//   review_body: "I had a positive overall experience with this facility. The care provided was excellent, and the staff was knowledgeable and attentive. As a person of color, it's encouraging to receive equitable and culturally sensitive healthcare. I highly recommend this facility to others.",
//   rating: 4
// }, 
// {
//   user_id: 16,
//   page_id: 12,
//   review_body: "Overall, my experience with this facility was great. The doctors and nurses were professional and showed genuine care for patients. As a person of color, I felt respected and well-supported during my visit. However, there is still work to be done to address healthcare disparities in our society.",
//   rating: 4
// },
// {
//   user_id: 12,
//   page_id: 13,
//   review_body: "I had a very good experience with this facility. The care provided was thorough, and the staff was attentive and compassionate. As a person of color, it's encouraging to receive equitable healthcare and feel valued as a patient. I would highly recommend this facility to others.",
//   rating: 4
// },
// {
//   user_id: 21,
//   page_id: 14,
//   review_body: "My experience with this facility was subpar. The quality of care provided was below expectations, and I felt my concerns were not adequately addressed. As a person of color, it's disheartening to face healthcare disparities. There is a need for significant improvements in ensuring equitable and inclusive care.",
//   rating: 2
// },
// {
//   user_id: 19,
//   page_id: 15,
//   review_body: "I had an exceptional experience with this facility. The care provided was top-notch, and the staff was incredibly supportive and attentive. As a person of color, it's crucial to receive equitable and respectful healthcare, and this facility exceeded my expectations. I highly recommend it to everyone.",
//   rating: 5
// },
// {
//   user_id: 5,
//   page_id: 15,
//   review_body: "My experience with this facility was appalling. The care provided was abysmal, and I encountered multiple instances of discrimination. As a person of color, it's disheartening to face such disparities in the healthcare system. Immediate action must be taken to address these issues and ensure equitable care for all.",
//   rating: 1
// },
// {
//   user_id: 13,
//   page_id: 16,
//   review_body: "I had an outstanding experience with this facility. The care provided was exceptional, and the staff demonstrated genuine compassion and expertise. As a person of color, it's crucial to receive equitable and culturally sensitive care, and this facility exceeded my expectations. I highly recommend it to everyone.",
//   rating: 5
// },
// {
//   user_id: 15,
//   page_id: 16,
//   review_body: "My experience with this facility was absolutely phenomenal. The quality of care I received was unmatched, and the staff went above and beyond to ensure my well-being. As a person of color, it's empowering to receive such exceptional healthcare that respects my needs and values. I wholeheartedly recommend this facility.",
//   rating: 5
// },
// {
//   user_id: 14,
//   page_id: 17,
//   review_body: "My experience with this facility was a complete nightmare. The care provided was shockingly poor, and I felt completely disregarded as a patient. As a person of color, it's disheartening to face such disparities and mistreatment in the healthcare system. Urgent action is needed to rectify these issues.",
//   rating: 1
// },
// {
//   user_id: 21,
//   page_id: 17,
//   review_body: "I had an awful experience with this facility. The care provided was abysmal, and the staff displayed a complete lack of professionalism. As a person of color, it's disheartening to encounter such disparities and discrimination in the healthcare system. Immediate improvements are necessary for the well-being of patients.",
//   rating: 1
// },
// {
//   user_id: 15,
//   page_id: 17,
//   review_body: "My experience with this facility was extremely disappointing. The quality of care was severely lacking, and I felt my concerns were completely ignored. As a person of color, it's distressing to face healthcare disparities and neglect. There is an urgent need for significant improvements to ensure equitable care.",
//   rating: 1
// },
// {
//   user_id: 6,
//   page_id: 17,
//   review_body: "I had a horrendous experience with this facility. The care provided was utterly unacceptable, and the staff exhibited a complete disregard for patients' well-being. As a person of color, it's disheartening to face such blatant disparities and mistreatment. Immediate intervention is necessary to address these issues.",
//   rating: 1
// },
// {
//   user_id: 18,
//   page_id: 17,
//   review_body: "My experience with this facility was beyond terrible. The care I received was shockingly subpar, and I encountered multiple instances of discrimination. As a person of color, it's disheartening to face such egregious disparities and mistreatment in the healthcare system. Swift action is needed to rectify these issues.",
//   rating: 1
// },
// {
//   user_id: 23,
//   page_id: 18,
//   review_body: "My experience with this facility was highly satisfactory. The care provided was commendable, and the staff was attentive and knowledgeable. As a person of color, it's encouraging to receive equitable and respectful healthcare. I would recommend this facility to others seeking quality care.",
//   rating: 4
// },
// {
//   user_id: 20,
//   page_id: 18,
//   review_body: "Overall, my experience with this facility was positive. The care provided met my expectations, and the staff was courteous and professional. As a person of color, it's important to have access to equitable healthcare, and this facility delivered. However, there is room for improvement in addressing disparities in the system.",
//   rating: 4
// },
// {
//   user_id: 30,
//   page_id: 19,
//   review_body: "I had a very positive experience with this facility. The care provided was exceptional, and the staff was attentive and compassionate. As a person of color, it's reassuring to receive equitable healthcare that addresses my specific needs. I highly recommend this facility for its commitment to inclusivity and quality care.",
//   rating: 4
// },
// {
//   user_id: 27,
//   page_id: 20,
//   review_body: "I had a great experience with this facility. The care provided was thorough, and the staff was friendly and attentive. As a person of color, it's important to receive equitable healthcare, and this facility met my expectations. I would recommend it to others seeking quality care.",
//   rating: 4
// },
// {
//   user_id: 28,
//   page_id: 20,
//   review_body: "Overall, my experience with this facility was very positive. The doctors and nurses were knowledgeable and approachable. As a person of color, it's encouraging to receive respectful and culturally sensitive healthcare. However, efforts should be made to further address disparities and ensure equitable access for all.",
//   rating: 4
// },
// {
//   user_id: 12,
//   page_id: 20,
//   review_body: "I had an excellent experience with this facility. The care provided was exceptional, and the staff showed genuine concern for my well-being. As a person of color, it's important to receive equitable and inclusive healthcare, and this facility delivered. I would highly recommend it to others seeking quality care.",
//   rating: 4
// }
  ]);
};