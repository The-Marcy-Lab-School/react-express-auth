const reviews = [
  {
    name: 'Doctor Quan',
    content: 'Best Doctor!',
    rating: 5,
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theabfm.org%2Fabout%2Fexecutives%2Fmartin-quan-md&psig=AOvVaw1SgkJPge6AUs3Quq2wFy3_&ust=1686944675771000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC_9OKExv8CFQAAAAAdAAAAABAE', 
  },
  {
    name: 'Bon Secours',
    content: "They can't do anything",
    rating: 0,
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theabfm.org%2Fabout%2Fexecutives%2Fmartin-quan-md&psig=AOvVaw1SgkJPge6AUs3Quq2wFy3_&ust=1686944675771000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC_9OKExv8CFQAAAAAdAAAAABAE', 
  },
  {
    name: 'City MD',
    content: "Sometimes good, sometimes bad",
    rating: 3.5,
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theabfm.org%2Fabout%2Fexecutives%2Fmartin-quan-md&psig=AOvVaw1SgkJPge6AUs3Quq2wFy3_&ust=1686944675771000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC_9OKExv8CFQAAAAAdAAAAABAE', 
  },// Add more reviews as needed
];

const ListOfReviews = () => {
  const handleReviewClick = (review) => {
    console.log(`Clicked review: ${review.name}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>This is the page the user sees once they are signed in</p>
      {reviews.map((review, index) => (
        <div className="card" key={index} onClick={() => handleReviewClick(review)}>
            <img src={review.image} alt={review.name} className="review-image" />
          <h3>{review.name}</h3>
          <p>{review.content}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOfReviews;
