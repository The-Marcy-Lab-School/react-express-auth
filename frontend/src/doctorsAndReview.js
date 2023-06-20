var doctors = [
    {
      id:1,
      picture:'https://www.drstevele.com/wp-content/uploads/2015/06/Marketing-LEH-Photo-Dr.-Le-FAD-200x200.jpeg',
      name: "dr.a",
      specialty: "cardiology",
      location: "123 Brooklyn NY",
      overallrating: "5/5",
    },
    {
      id:1,
      picture: 'https://cdn.castleconnolly.com/dims4/default/0f6faa0/2147483647/strip/true/crop/300x300+0+0/resize/200x200!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.amazonaws.com%2Fa8%2F14%2F6570678f4b47be57f9f18924b6db%2Fgewanter-richard.jpg',
      name: "dr.b",
      specialty: "Pediatrics",
      location: "123 Brooklyn NY",
      overallrating: "3/5"
    },
    {
      id:2,
      picture: 'https://www.theveranda.org/wp-content/uploads/2020/03/Marketing-Photo-VERA-Wilson-FAD-200x200.jpeg',
      name: "dr.c",
      specialty: "Dermatology",
      location: "123 Brooklyn NY",
      overallrating: "2/5",
    },
    {
      id: 3,
      picture: 'https://pngimg.com/d/doctor_PNG16030.png',
      name: "dr.d",
      specialty: "Psychiatry",
      location: "123 Brooklyn NY",
      overallrating: "1/5",
    },
    {
      id: 4,
      picture: 'https://www.baltimoremagazine.com/wp-content/uploads/2022/10/SOLOMON-missale-200x200.jpg',
      name: "dr.e",
      specialty: "Orthopedic Surgery",
      location: "123 Brooklyn NY",
      overallrating: "0/5",
    },
  ];


  var reviews = [
    {
        userId : 0,
        pageId : 2,
        rating: 3,
        review: 'Excellent bedside manner and thorough in explaining medical procedures. Highly recommended!'
    },
    {
        userId : 1,
        pageId : 0,
        rating: 2,
        review: 'Knowledgeable and compassionate. She took the time to listen to my concerns and provided me with a treatment plan that worked wonders.'
    },
    {
        userId : 3,
        pageId : 1,
        rating: 4,
        review: 'Professional and efficient. I felt comfortable throughout the entire appointment and left with a clear understanding of my diagnosis.'
    },
    {
        userId : 1,
        pageId : 4,
        rating: 5,
        review: 'Truly cares about his patients well-being. He goes above and beyond to ensure a positive healthcare experience.'
    },
    {
        userId : 2,
        pageId : 0,
        rating: 2,
        review: 'Excellent bedside manner and thorough in explaining medical procedures. Highly recommended!'
    },    {
        userId : 1,
        pageId : 1,
        rating: 3,
        review: 'Excellent bedside manner and thorough in explaining medical procedures. Highly recommended!'
    },
    {
        userId : 3,
        pageId : 1,
        rating: 4,
        review: 'An exceptional surgeon who performed my procedure flawlessly. I am grateful for his expertise and skill.'
    },
    {
        userId : 1,
        pageId : 3,
        rating: 5,
        review: 'Friendly and approachable. She made me feel at ease during my visit and addressed all my questions with patience.'
    },
    {
        userId : 3,
        pageId : 2,
        rating: 2,
        review: 'Highly knowledgeable in his field. He explained my condition in a way that I could understand and provided effective treatment options.'
    },
    {
        userId : 4,
        pageId : 0,
        rating: 1,
        review: 'Attentive and detail-oriented. He took the time to thoroughly examine me and offered personalized advice for maintaining my health.'
    }
  ]



export { reviews };
export { doctors };