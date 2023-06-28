import { useParams, useLocation, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ReviewModal from '../components/ReviewModal';
import UserReview from '../components/UserReview';

export default function DoctorReview() {
  let { id } = useParams();
  const { state } = useLocation();
  const { page, reviews, users } = state;

  const individualReview = reviews.filter((review) => review.page_id === parseInt(id));
  console.log(individualReview);

  const userToReview = users.filter((user) =>
    individualReview.some((review) => review.user_id === user.id)
  );
  const ratings = individualReview.map((review) => review.rating);
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  const allFriendliness = individualReview.map((review) => review.staff_friendliness);
  const averageStaffFriendliness =
    allFriendliness.reduce((sum, friendlinessScore) => sum + friendlinessScore, 0) / allFriendliness.length;

  const allWaitTimes = individualReview.map((review) => review.wait_times);
  const averageWaitTimes =
    allWaitTimes.reduce((sum, waitTimeScore) => sum + waitTimeScore, 0) / allWaitTimes.length;

  const allQualityOfCare = individualReview.map((review) => review.quality_of_care);
  const averageQualityOfCare =
    allQualityOfCare.reduce((sum, qualityOfCareScore) => sum + qualityOfCareScore, 0) / allQualityOfCare.length;

  let starone = '⭐️';
  let startwo = '⭐️ ⭐️';
  let starthree = '⭐️ ⭐️ ⭐️';
  let starfour = '⭐️ ⭐️ ⭐️ ⭐️';
  let starfive = '⭐️ ⭐️ ⭐️ ⭐️ ⭐️';
  let starRating;
  let starFriendliness;
  let starWait;
  let starCare;
  switch (averageRating) {
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
  const calculateStarRating = (averageRating) => {
    if (averageRating >= 0.5 && averageRating < 1.5) {
      return starone;
    } else if (averageRating >= 1.5 && averageRating < 2.5) {
      return startwo;
    } else if (averageRating >= 2.5 && averageRating < 3.5) {
      return starthree;
    } else if (averageRating >= 3.5 && averageRating < 4.5) {
      return starfour;
    } else if (averageRating >= 4.5) {
      return starfive;
    } else {
      return ''; // handle cases where rating is not within 0.5-5 range
    }
  };
  
  // Update the switch statements
  starFriendliness = calculateStarRating(averageStaffFriendliness);
  starWait = calculateStarRating(averageWaitTimes);
  starCare = calculateStarRating(averageQualityOfCare);

  const combinedReviews = individualReview.map((review) => {
    const matchingUser = userToReview.find((user) => user.id === review.user_id);
    return { ...review, user: matchingUser };
  });

  // Pagination logic
  const reviewsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = combinedReviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination component
  const Pagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(combinedReviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(starRating)
    return (
      <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button id="pagination"
                className={`pagination-link ${number === currentPage ? 'is-current' : ''}`}
                aria-label={`Goto page ${number}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <article className="doctorReview">
        <div className="column is-half doctorInfo">
          <div className="imgandspecialty">
            <div className="doctorPictureFrame">
              <img src={page.photo} alt="Doctor Picture" id="personImg" />
            </div>
            <div className="specifications">
              <h2 className="name">{page.facility_doctor}</h2>
              <h4 className="location">{page.address}</h4>
              <h3 className="specialty">{page.specialty} {starRating}</h3>
              <p className="description">"{page.description}"</p>
            </div>
            <div className="categories-all">
              <p className="cats">Staff Friendliness: {starFriendliness}</p>
              <p className="cats">Wait Times: {starWait}</p>
              <p className="cats">Quality of Care: {starCare}</p>
            </div>
            <ReviewModal id={id} />
            <NavLink to="/compare"><button className='reviewButton'>Compare</button></NavLink>
          </div>
        </div>
        <div className="reviewrow">
          {currentReviews.length > 0 ? (
            currentReviews.map((review) => <UserReview review={review} key={review.user.id} />)
          ) : (
            <p>No reviews available.</p>
          )}

          <div className='paginationButton'>
            {combinedReviews.length > reviewsPerPage && (
              <Pagination
                reviewsPerPage={reviewsPerPage}
                totalReviews={combinedReviews.length}
                paginate={paginate}
              />
            )}
          </div>
        </div>
      </article>
    </>
  );
}