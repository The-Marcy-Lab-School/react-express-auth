import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleDoctorId = () => {
    const id = doctor.id;
    navigate(`/doctor/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        flexDirection: 'row',
        '&:hover': {
        backgroundColor: '#beeae7',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)',
          transition: 'box-shadow 0.3s, transform 0.3s',
          cursor: 'pointer',
        },
      }}
      onClick={handleDoctorId}
    >
      <CardMedia sx={{ height: 140 }} image={doctor.picture} alt="doctor image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {doctor.specialty}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {doctor.reviews}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;




// import { useNavigate } from "react-router-dom";

// function DoctorCard ({ doctor }){
//     const navigate = useNavigate();

//     const handleDoctorId = () => {
//         const id = doctor.id;
//         navigate(`/doctor/${id}`);
//     };
//     return (
//         <div className="ui-card" onClick = {handleDoctorId} doctor={doctor}>
//             <div className="image">
//                 <img src= {doctor.picture} alt='doctor image'/>
//             </div>
//             <div className="content">
//                 <div className="header">
//                     {doctor.name}
//                 </div>
//                 <div className="rating">
//                     {doctor.reviews}
//                 </div>
//                 <div className="specialty"> 
//                 {doctor.specialty}
//                  </div>
//                  <div className="review"> {doctor.reviews} </div>

//             </div>
//         </div>
//     )

// }
// export default DoctorCard;