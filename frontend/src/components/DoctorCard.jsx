import { useNavigate } from "react-router-dom";
// import ReviewCard from "./ReviewCard";
import React from 'react';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function DoctorCard ({ doctor, reviews }){
    const navigate = useNavigate();
    
    const handleDoctorId = () => {
        const id = doctor.id;
        navigate(`/doctor/${id}`);
    };
    const filteredReviews = reviews.filter((review) => review.pageId === doctor.id);
    console.log(filteredReviews)
    return (
<MDBCard style={{ maxWidth: '540px' }} onClick = {handleDoctorId} {...doctor} {...reviews}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={doctor.picture} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{doctor.name}</MDBCardTitle>
            <MDBCardText>
                some random review
            </MDBCardText>
            <MDBCardText>
              <small className='specialty'>{doctor.specialty}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    )

}
export default DoctorCard;


{/* <MDBCard style={{ maxWidth: '540px' }} onClick = {handleDoctorId} doctor={doctor} reviews={reviews}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='{doctor.picture}' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{doctor.name}</MDBCardTitle>
            <MDBCardText>
            {filteredReviews.length > 0 ? filteredReviews[0]
           : <p>No review available.</p>}
            </MDBCardText>
            <MDBCardText>
              <small className='specialty'>{doctor.specialty}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard> */}



{/* <div className="ui-card" onClick = {handleDoctorId} doctor={doctor} reviews={reviews} >
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
</div> */}