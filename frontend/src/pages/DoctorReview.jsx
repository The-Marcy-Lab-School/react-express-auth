import { useParams, useLocation } from 'react-router-dom';
import ReviewModal from '../components/ReviewModal';
import ReviewCard from '../components/ReviewCard';


export default function DoctorReview() {
  let { id } = useParams();

  // Access the location state to get the page and reviews
  const { state } = useLocation();
  const { page, reviews } = state;


  const individualReview = reviews.filter(review => review.page_id === parseInt(id))

  return (
    <>
      <article>
        <div className="imgandspecialty">
          <img src={page.photo} alt="Doctor Picture" className="personImg" />
          <h3 className="specialty">{page.specialty}</h3>
          <h4 className="location">{page.address}</h4>
        </div>

        <div>
          <h2 className="name">{page.facility_doctor}</h2>
          <div className="overallrating">{5}</div>
        </div>

        <div>
          {/* Render the reviews here */}
          {individualReview.length > 0 ? (
            individualReview.map((review) => <ReviewCard review={review} key={review.userId} />)
          ) : (
            <p>No reviews available.</p>
          )}
        </div>

        <ReviewModal id={id} />
      </article>
    </>
  );
}
