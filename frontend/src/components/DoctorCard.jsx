import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { NavLink } from 'react-router-dom';


function DoctorCard ({page, reviews}){

  
    const navigate = useNavigate();
    
    const handleDoctorId = () => {
        const id = page.id;
        navigate(`/doctor/${id}`, { state: { page, reviews } });
    };

  const matchingReview = reviews.filter(review => review.page_id === page.id)
  console.log(` matching reviews ${matchingReview}`)
     

    return (
        <div className="column is-three-quarters" onClick = {handleDoctorId} page={page} >
        <div className="box" >
          <p className="title is-4">{page.facility_doctor} - {page.specialty}</p>
          <p className="has-text-centered">{page.address}</p>
          <div className="columns">
            
            <div className="column is-one-third">
              <div>
                <img src={page.photo} alt="Image" style={{ width: '200px', height: '200px' }}/>
                <p>Overall Rating: {page.overall_rating}</p>
              </div>
            </div>
        
            <div className="box" id="review">
        <div className="centered-text">
        
        <p className="box-text">
        <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" style={{ width: '15px', height: 'auto' }} />
        {matchingReview.length > 0 ? (
        <ReviewCard review={matchingReview[0]} />
        ) : (
        <p>No review available.</p>
        )}
        </p>
        </div>
        </div>
        
            
          </div>
          <p className="subtitle">"{page.description}"</p>
        </div>
        </div>

    )

}
export default DoctorCard;
