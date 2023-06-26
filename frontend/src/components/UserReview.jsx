export default function UserReview({ review }) {
    let starone = '⭐️'
    let startwo = '⭐️ ⭐️'
    let starthree = '⭐️ ⭐️ ⭐️'
    let starfour = '⭐️ ⭐️ ⭐️ ⭐️'
    let starfive = '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    let starRating;
    let starFriendliness;
    let starWait;
    let starCare;
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
    switch (review.staff_friendliness) {
      case 1:
        starFriendliness = starone;
        break;
      case 2:
        starFriendliness = startwo;
        break;
      case 3:
        starFriendliness = starthree;
        break;
      case 4:
        starFriendliness = starfour;
        break;
      case 5:
        starFriendliness = starfive;
        break;
      default:
        starFriendliness = ''; // handle cases where rating is not 1-5
    }
    switch (review.wait_times) {
      case 1:
        starWait = starone;
        break;
      case 2:
        starWait = startwo;
        break;
      case 3:
        starWait = starthree;
        break;
      case 4:
        starWait = starfour;
        break;
      case 5:
        starWait = starfive;
        break;
      default:
        starWait = ''; // handle cases where rating is not 1-5
    }
    switch (review.quality_of_care) {
      case 1:
        starCare = starone;
        break;
      case 2:
        starCare = startwo;
        break;
      case 3:
        starCare = starthree;
        break;
      case 4:
        starCare = starfour;
        break;
      case 5:
        starCare = starfive;
        break;
      default:
        starCare = ''; // handle cases where rating is not 1-5
    }
    // ...
    
    return (
        <div className="box" id ='reviewbox'>
          <div className="username">{review.user.username}</div>
          <div className="starRating">{starRating}</div>
          <div className="rating">{review.review_body}</div>
          <div className="categories">
            <p>Staff Friendliness: {starFriendliness}</p>
            <p>Wait Times: {starWait}</p>
            <p>Quality of Care: {starCare}</p>
          </div>
          <div className="userSpecs">
            <div>{review.user.race}</div>
            <div>{review.user.ethnicity}</div>
            <div>{review.user.age}</div>
            <div>{review.user.gender}</div>
          </div>
        </div>
    );
}