import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import CurrentUserContext from "../contexts/current-user-context";
import { createBookmark } from "../adapters/bookmark-adapter";

function DoctorCard({ page, reviews, users }) {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const user = currentUser;

  var handleDoctorId = () => {
    const id = page.id;
    navigate(`/doctor/${id}`, { state: { page, reviews, users } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = user.id;
    const page_id = page.id;
    const [bookmark, error] = await createBookmark({
      user_id,
      page_id,
    });
    if (error) {
      setErrorText(error.statusText);
      console.log(setErrorText(error.statusText));
    }
  };

  const matchingReview = reviews.filter((review) => review.page_id === page.id);
  const ratings = matchingReview.map((review) => review.rating); // Extract all rating values into a new array
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length; // Calculate the average
  let starone = "⭐️";
  let startwo = "⭐️ ⭐️";
  let starthree = "⭐️ ⭐️ ⭐️";
  let starfour = "⭐️ ⭐️ ⭐️ ⭐️";
  let starfive = "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
  let starRating;
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

  return (
    <div
      className="column is-three-quarters"
    >
      <div className="box" style={{ border: "solid", borderColor: "black" }}>
        <p className="title is-4">
          {page.facility_doctor} - {page.specialty}{" "}
        </p>

        <p className="has-text-centered">{page.address}</p>
        <div className="columns" onClick={handleDoctorId}>
          <div className="column is-one-third">
            <div onClick={handleDoctorId}>
              <img
                src={page.photo}
                alt="Image"
                style={{ width: "200px", height: "200px" }}
              />
              <p>Overall Rating: {starRating}</p>
            </div>
          </div>

          <div className="box" id="review">
            <div className="centered-text">
              <div className="box-text">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                  style={{ width: "15px", height: "auto" }}
                />
                {matchingReview.length > 0 ? (
                  <ReviewCard review={matchingReview[0]} />
                ) : (
                  <p>No review available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
                onClick={handleSubmit}
                icon={faBookmark}
                style={{ color: "#132734" }}
              />
        <p className="subtitle">"{page.description}"</p>
      </div>
    </div>
  );
}
export default DoctorCard;
