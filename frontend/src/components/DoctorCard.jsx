import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";


function DoctorCard ({page}){
    const navigate = useNavigate();
    
    const handleDoctorId = () => {
        const id = page.id;
        navigate(`/doctor/${id}`);
    };
    console.log(page)


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
     {/* <div className="review">
     {filteredReviews.length > 0 ? (
<ReviewCard review={filteredReviews[0]} />
) : (
<p>No review available.</p>
)}
     </div> */}
</div>
</div> 
    )

}
export default DoctorCard;