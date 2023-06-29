import { useParams, useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewModal from "../components/ReviewModal";
import UserReview from "../components/UserReview";

export default function DoctorReview() {
  let { id } = useParams();
  const [pageReviews, setPageReview] = useState([]);
  const { state } = useLocation();
  const { page } = state;

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetch(`/api/reviews/${id}`);
      const data = await response.json();
      setPageReview(data);
      console.log(pageReviews);
    };
    getReviews();
  }, []);

  const ratings = pageReviews.map((review) => review.rating);
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  const allFriendliness = pageReviews.map(
    (review) => review.staff_friendliness
  );
  const averageStaffFriendliness =
    allFriendliness.reduce(
      (sum, friendlinessScore) => sum + friendlinessScore,
      0
    ) / allFriendliness.length;

  const allWaitTimes = pageReviews.map((review) => review.wait_times);
  const averageWaitTimes =
    allWaitTimes.reduce((sum, waitTimeScore) => sum + waitTimeScore, 0) /
    allWaitTimes.length;

  const allQualityOfCare = pageReviews.map((review) => review.quality_of_care);
  const averageQualityOfCare =
    allQualityOfCare.reduce(
      (sum, qualityOfCareScore) => sum + qualityOfCareScore,
      0
    ) / allQualityOfCare.length;

  let starone = "⭐️";
  let startwo = "⭐️ ⭐️";
  let starthree = "⭐️ ⭐️ ⭐️";
  let starfour = "⭐️ ⭐️ ⭐️ ⭐️";
  let starfive = "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
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
      starRating = ""; // handle cases where rating is not 1-5
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
      return ""; // handle cases where rating is not within 0.5-5 range
    }
  };

  // Update the switch statements
  starFriendliness = calculateStarRating(averageStaffFriendliness);
  starWait = calculateStarRating(averageWaitTimes);
  starCare = calculateStarRating(averageQualityOfCare);

  // Pagination logic
  const reviewsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = pageReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  // Define the paginate function
  // Define the paginate function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination component
  const Pagination = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(pageReviews.length / reviewsPerPage);
    const maxDisplayedPages = 2; // Set the maximum number of displayed pages

    let startPage = currentPage - Math.floor(maxDisplayedPages / 2);
    let endPage = currentPage + Math.floor(maxDisplayedPages / 2);

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      if (startPage > 1) {
        startPage -= endPage - currentPage;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav
        className="pagination is-centered is-small"
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                id="pagination"
                className={`pagination-link ${
                  number === currentPage ? "is-current" : ""
                }`}
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
              <h3 className="specialty">
                {page.specialty} {starRating}
              </h3>
              <p className="description">"{page.description}"</p>
            </div>
            <div className="categories-all">
              <p className="cats">Staff Friendliness: {starFriendliness}</p>
              <p className="cats">Wait Times: {starWait}</p>
              <p className="cats">Quality of Care: {starCare}</p>
            </div>
            <ReviewModal id={id} />
          </div>
        </div>
        <div className="reviewrow">
          {currentReviews.length > 0 ? (
            currentReviews.map((review) => (
              <UserReview review={review} key={review.id} />
            ))
          ) : (
            <p>No reviews available.</p>
          )}

          <div className="paginationButton">
            {pageReviews.length > reviewsPerPage && (
              <Pagination
                reviewsPerPage={reviewsPerPage}
                totalReviews={pageReviews.length}
                paginate={paginate}
              />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
