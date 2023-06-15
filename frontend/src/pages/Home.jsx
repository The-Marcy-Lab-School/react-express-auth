import { useContext } from "react";
import DoctorCard from "../components/DoctorCard";
import DoctorContext from "../contexts/DoctorContext";

const doctors = [
  {
    id:0,
    name: "dr.a",
    specialty: "cardiology",
    location: "123 Brooklyn NY",
    overallrating: "5/5",
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7BZRI5Ga1aBYWfiUPF4JDk5XG_kRghK5Dw&usqp=CAU'
  },
  {
    id:1,
    name: "dr.b",
    specialty: "Pediatrics",
    location: "123 Brooklyn NY",
    overallrating: "3/5",
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7BZRI5Ga1aBYWfiUPF4JDk5XG_kRghK5Dw&usqp=CAU'
  },
  {
    id:2,
    name: "dr.c",
    specialty: "Dermatology",
    location: "123 Brooklyn NY",
    overallrating: "2/5",
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7BZRI5Ga1aBYWfiUPF4JDk5XG_kRghK5Dw&usqp=CAU'
  },
  {
    id: 3,
    name: "dr.d",
    specialty: "Psychiatry",
    location: "123 Brooklyn NY",
    overallrating: "1/5",
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7BZRI5Ga1aBYWfiUPF4JDk5XG_kRghK5Dw&usqp=CAU'
  },
  {
    id: 4,
    name: "dr.e",
    specialty: "Orthopedic Surgery",
    location: "123 Brooklyn NY",
    overallrating: "0/5",
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7BZRI5Ga1aBYWfiUPF4JDk5XG_kRghK5Dw&usqp=CAU'
  },
];

 export default function DoctorsList(){
  
    
      console.log(doctors)

        
      
      return (
        <div className="ui centered cards" >
            {doctors.map(doctor => { return <DoctorCard key={doctor.id} doctor={doctor} />})}
        </div>

      )      
    
}
export { doctors };
