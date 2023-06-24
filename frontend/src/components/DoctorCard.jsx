import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
// import { NavLink } from 'react-router-dom';


function DoctorCard({ page, reviews }) {


    const navigate = useNavigate();

    const handleDoctorId = () => {
        const id = page.id;
        navigate(`/doctor/${id}`, { state: { page, reviews } });
    };

    const matchingReview = reviews.filter(review => review.page_id === page.id)
    console.log(` matching reviews ${matchingReview}`)


    return (
      
     <div className="ui-card" onClick = {handleDoctorId} page={page} >
<div className="image">
    <img src= {page.photo} alt='doctor image'/>
</div>
<div className="content">
    <div className="header">
        {page.facility_doctor}
    </div>
    <div className="rating">
        {page.overall_rating}
    </div>
    <div className="specialty"> 
    {page.specialty}
     </div>
     <div className="review">
      rating: {matchingReview.length > 0 ? (
<ReviewCard review={matchingReview[0]} />
) : (
<p>No review available.</p>
)}
     </div>
</div>
</div> 
    )

}
export default DoctorCard;
