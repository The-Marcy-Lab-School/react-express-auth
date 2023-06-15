import { useNavigate } from "react-router-dom";

function DoctorCard ({ doctor }){
    const navigate = useNavigate();
    
    const handleDoctorId = () => {
        const id = doctor.id;
        navigate(`/doctor/${id}`);
    };
    return (
        <div className="ui-card" onClick = {handleDoctorId} doctor={doctor}>
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
                 <div className="review"> {doctor.reviews} </div>

            </div>
        </div>
    )

}
export default DoctorCard;