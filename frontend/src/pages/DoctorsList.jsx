import { useContext } from "react";
import DoctorCard from "../components/DoctorCard";
import DoctorContext from "../contexts/DoctorContext";


var doctors = [
    {
      id:0,
      picture:'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
      name: "dr.a",
      specialty: "cardiology",
      location: "123 Brooklyn NY",
      overallrating: "5/5",
    },
    {
      id:1,
      picture: 'https://www.yourfreecareertest.com/wp-content/uploads/2018/01/how_to_become_a_doctor.jpg',
      name: "dr.b",
      specialty: "Pediatrics",
      location: "123 Brooklyn NY",
      overallrating: "3/5",
    },
    {
      id:2,
      picture: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      name: "dr.c",
      specialty: "Dermatology",
      location: "123 Brooklyn NY",
      overallrating: "2/5",
    },
    {
      id: 3,
      picture: 'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
      name: "dr.d",
      specialty: "Psychiatry",
      location: "123 Brooklyn NY",
      overallrating: "1/5",
    },
    {
      id: 4,
      picture: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      name: "dr.e",
      specialty: "Orthopedic Surgery",
      location: "123 Brooklyn NY",
      overallrating: "0/5",
    },
  ];
 function DoctorsList(){
    console.log('hello')
      const { doctors } = useContext(DoctorContext)
      console.log(doctors)
      
        
      
      return (
        <div className="ui centered cards">
            {doctors.map(doctor => { return <DoctorCard key={doctor.id} {...doctor} doctor={doctor} />})}
        </div>

      )      
    
}
export default DoctorsList