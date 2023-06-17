import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";

function DoctorCard ({ doctor, reviews }){
    const navigate = useNavigate();
    
    const handleDoctorId = () => {
        const id = doctor.id;
        navigate(`/doctor/${id}`);
    };
    const filteredReviews = reviews.filter((review) => review.pageId === doctor.id);
    console.log(filteredReviews)
    return (
        <div className="ui-card" onClick = {handleDoctorId} doctor={doctor} reviews={reviews} >
            <div className="image">
                <img src= {doctor.picture} alt='doctor image'/>
            </div>
            <div className="content">
                <div className="header">
                    {doctor.name}
                </div>
                <div className="rating">
                    {doctor.reviews}
                </div>
                <div className="specialty"> 
                {doctor.specialty}
                 </div>
                 <div className="review">
                 {filteredReviews.length > 0 ? (
            <ReviewCard review={filteredReviews[0]} />
          ) : (
            <p>No review available.</p>
          )}
                 </div>
            </div>
        </div>
    )

}
export default DoctorCard;