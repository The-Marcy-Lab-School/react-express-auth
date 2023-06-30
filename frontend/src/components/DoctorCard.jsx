import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CurrentUserContext from "../contexts/current-user-context";
import { createBookmark } from "../adapters/bookmark-adapter";

function DoctorCard({ page, reviews, users }) {
  const [clickedBookmark, setClickedBookmark] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const user = currentUser;

  const handleDoctorId = () => {
    const id = page.id;
    navigate(`/doctor/${id}`, { state: { page, reviews, users } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = user.id;
    const page_id = page.id;

    try {
      const { bookmark, error } = await createBookmark({
        user_id,
        page_id,
      });

      if (error) {
        setErrorText(error.statusText);
        console.log(error.statusText);
      } else {
        // Bookmark creation successful
        console.log("Bookmark created:", bookmark);
        setClickedBookmark(true); // Update the bookmark state
      }
    } catch (error) {
      console.log("Error creating bookmark:", error);
    }
  };

  const matchingReview = reviews.filter((review) => review.page_id === page.id);
  const ratings = matchingReview.map((review) => review.rating);
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
    <div className="entiredoctorCard">
      <div
        className="doctorImage"
        style={{ backgroundImage: `url(${page.photo})` }}
        onClick={handleDoctorId}
      ></div>
      <div className="doctorInformation" >
        <h4>
          {" "}
          {page.facility_doctor}{" "}
          {!clickedBookmark ? (
            <FontAwesomeIcon
              onClick={handleSubmit}
              icon={faBookmark}
              style={{ color: "white" }}
            />
          ) : (
            <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
          )}
        </h4>
        <h6>{page.specialty}</h6>
        <h6>{page.address}</h6>
        Rating: {starRating}
        <p className="testdoctordescription">"{page.description}"</p>
      </div>
    </div>
  );
}
export default DoctorCard;