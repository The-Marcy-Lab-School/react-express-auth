import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";



function DoctorCard ({page, reviews, users}){

  
    const navigate = useNavigate();
    
    const handleDoctorId = () => {
        const id = page.id;
        navigate(`/doctor/${id}`, { state: { page, reviews, users } });
    };

  const matchingReview = reviews.filter(review => review.page_id === page.id)
  const ratings = matchingReview.map(review => review.rating); // Extract all rating values into a new array
  const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length; // Calculate the average
  let starone = '⭐️'
  let startwo = '⭐️ ⭐️'
  let starthree = '⭐️ ⭐️ ⭐️'
  let starfour = '⭐️ ⭐️ ⭐️ ⭐️'
  let starfive = '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
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
      starRating = ''; // handle cases where rating is not 1-5
  }  

    return (
        <div className="column is-three-quarters" onClick = {handleDoctorId} page={page} >
        <div className="box" style={{ border:"solid", borderColor:"black"}}>
          <p className="title is-4">{page.facility_doctor} - {page.specialty}</p>
          <p className="has-text-centered">{page.address}</p>
          <div className="columns">
            
            <div className="column is-one-third">
              <div>
                <img src={page.photo} alt="Image" style={{ width: '200px', height: '200px' }}/>
                <p>Overall Rating: {starRating}</p>
              </div>
            </div>
        
            <div className="box" id="review">
        <div className="centered-text">
        
        <div className="box-text">
        <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" style={{ width: '15px', height: 'auto' }} />
        {matchingReview.length > 0 ? (
        <ReviewCard review={matchingReview[0]} />
        ) : (
        <p>No review available.</p>
        )}
        </div>
        </div>
        </div>
        
            
          </div>
          <p className="subtitle">"{page.description}"</p>
        </div>
        </div>

    )

}
export default DoctorCard;
