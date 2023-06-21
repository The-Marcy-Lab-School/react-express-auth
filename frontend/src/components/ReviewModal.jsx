import React, { useState, useContext } from 'react';
import CurrentUserContext from "../contexts/current-user-context";
import { createReview } from "../adapters/review-adapter";

const ReviewModal = ({id}) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review_body, setReview_body] = useState('');
  const [errorText, setErrorText] = useState('');
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
    console.log("handlesubmit")
    const user = currentUser
    const page_id = id;
    const user_id = user.id
    console.log(page_id)
    console.log(user_id)
    const [review, error] = await createReview({user_id, page_id, review_body, rating})
    if (error) {
      setErrorText(error.statusText);
      console.log(setErrorText(error.statusText))
    } else {
      // setCurrentUser(user);
      setFormSubmitted(true); // Set the formSubmitted state variable to true
    }
    // Perform any necessary actions with the rating and review data

    setRating(0);
    setReview_body('');
    // setShowModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === 'review_body') setReview_body(value)
    if(name === 'rating') setRating(value)
    console.log(value)

  }

  return (
    <div>
      <button onClick={handleOpenModal}>Write A Review</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Write Review</h2>
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <div>
                <label htmlFor="rating">Rating (out of 5):</label>
                <input
                  type="number"
                  id="rating"
                  min="0"
                  max="5"
                  name="rating"
                  value={rating}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="review_body">Review:</label>
                <textarea
                  id="review_body"
                  name="review_body"
                  value={review_body}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewModal;
