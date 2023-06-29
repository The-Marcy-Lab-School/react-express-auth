import React, { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createReview } from "../adapters/review-adapter";
import "bulma/css/bulma.css";
const ReviewModal = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review_body, setReview_body] = useState("");
  const [errorText, setErrorText] = useState("");
  const [staff_friendliness, setStaffFriendliness] = useState(0);
  const [wait_times, setWaitTimes] = useState(0);
  const [quality_of_care, setQualityOfCare] = useState(0);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = currentUser;
    const page_id = id;
    const user_id = user.id;
    const [review, error] = await createReview({
      user_id,
      page_id,
      review_body,
      rating,
      staff_friendliness,
      wait_times,
      quality_of_care,
    });
    if (error) {
      setErrorText(error.statusText);
    } else {
      // Assuming review is the newly created review object
      // Update the reviews state or perform any necessary action
      // to display the new review
      setFormSubmitted(true);
    }
    setRating(0);
    setReview_body("");
    setShowModal(false);
    window.location.reload();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "review_body") setReview_body(value);
    if (name === "rating") setRating(value);
    if (name === "staff_friendliness") setStaffFriendliness(value);
    if (name === "wait_times") setWaitTimes(value);
    if (name === "quality_of_care") setQualityOfCare(value);
  };

  return (
    <div>
      <button className="button reviewButton" onClick={handleOpenModal}>
        Write A Review
      </button>
      {showModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Write Review</p>
              <button
                className="delete"
                aria-label="close"
                onClick={handleCloseModal}
              ></button>
            </header>
            <section className="modal-card-body">
              <form onSubmit={handleSubmit} onChange={handleChange}>
                {/* Form fields */}
                <div className="field">
                  <label
                    htmlFor="rating"
                    className="label"
                    style={{ color: "#001A49" }}
                  >
                    Rating (out of 5):
                  </label>
                  <div className="control">
                    <input
                      type="number"
                      id="rating"
                      min="0"
                      max="5"
                      name="rating"
                      value={rating}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label
                    htmlFor="review_body"
                    className="label"
                    style={{ color: "#001A49" }}
                  >
                    Review:
                  </label>
                  <div className="control">
                    <textarea
                      id="review_body"
                      name="review_body"
                      value={review_body}
                      onChange={handleChange}
                      className="textarea"
                    />
                  </div>
                </div>
                <div className="field">
                  <label
                    htmlFor="staff_friendliness"
                    className="label"
                    style={{ color: "#001A49" }}
                  >
                    Staff Friendliness (out of 5):
                  </label>
                  <div className="control">
                    <input
                      type="number"
                      id="staff_friendliness"
                      min="0"
                      max="5"
                      name="staff_friendliness"
                      value={staff_friendliness}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label
                    htmlFor="wait_times"
                    className="label"
                    style={{ color: "#001A49" }}
                  >
                    Wait Times (out of 5):
                  </label>
                  <div className="control">
                    <input
                      type="number"
                      id="wait_times"
                      min="0"
                      max="5"
                      name="wait_times"
                      value={wait_times}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label
                    htmlFor="quality_of_care"
                    className="label"
                    style={{ color: "#001A49" }}
                  >
                    Quality of Care (out of 5):
                  </label>
                  <div className="control">
                    <input
                      type="number"
                      id="quality_of_care"
                      min="0"
                      max="5"
                      name="quality_of_care"
                      value={quality_of_care}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="submit"
                      className="button is-link"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button" onClick={handleCloseModal}>
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default ReviewModal;
