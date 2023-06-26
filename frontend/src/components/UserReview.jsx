export default function UserReview({ review }) {
    let starone = '⭐️'
    let startwo = '⭐️ ⭐️'
    let starthree = '⭐️ ⭐️ ⭐️'
    let starfour = '⭐️ ⭐️ ⭐️ ⭐️'
    let starfive = '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    let starRating;
    switch (review.rating) {
      case 1:
        starRating = starone;
        break;
      case 2:
        starRating = startwo;
        break;
      case 3:
        starRating = starthree;
        break;
      case 4:
        starRating = starfour;
        break;
      case 5:
        starRating = starfive;
        break;
      default:
        starRating = ''; // handle cases where rating is not 1-5
    }
    
    // ...
    
    return (
        <div className="box" id ='reviewbox'>
          <div className="username">{review.user.username}</div>
          <div className="starRating">{starRating}</div>
          <div className="rating">{review.review_body}</div>
          <div className="userSpecs">
            <div>{review.user.race}</div>
            <div>{review.user.ethnicity}</div>
            <div>{review.user.age}</div>
            <div>{review.user.gender}</div>
          </div>
        </div>
    );
}