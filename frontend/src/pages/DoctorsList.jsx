import { useContext } from "react";
import DoctorCard from "../components/DoctorCard";
import DoctorContext from "../contexts/DoctorContext";


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