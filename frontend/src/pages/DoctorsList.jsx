import { useContext } from "react";
import DoctorCard from "../components/DoctorCard";
import DoctorContext from "../contexts/DoctorContext";


 function DoctorsList(){
    console.log('hello')
      const { doctors } = useContext(DoctorContext)
      console.log(doctors)
      
        
      
      return (

        <div className="ui centered cards">
            {doctors.map((doctor,i) => { return <DoctorCard key={i} {...doctor} />})}
        </div>

      )      
    
}
export default DoctorsList