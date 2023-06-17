import { Link, useParams} from 'react-router-dom';
import ReviewModal from '../components/ReviewModal';
import { doctors } from '../doctorsAndReview';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../doctorsAndReview';


export default function DoctorReview (){
   
    let { id } = useParams();
    const doctor = doctors.find((doctor) => doctor.id === parseInt(id))
    const filteredReviews = reviews.filter(
        (review) => review.pageId === doctor.id );
      console.log(filteredReviews)


    return <>
    <article>
        <div className="imgandspecialty">
            <img src={doctor.picture} alt='Doctor Picture' className="personImg"/>
            <h3 className="specialty">{doctor.specialty}</h3>
            <h4 className="location">{doctor.location}</h4>
        </div>

        <div>
            <h2 className="name"> {doctor.name} </h2>
            <div className="overallrating">{ doctor.overallrating }</div>
        </div>
        <div>
        {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => <ReviewCard review={review} key={review.userId} />)
          ) : (
            <p>No reviews available.</p>
          )}
        </div>

        <ReviewModal />

    </article>
    </>
}