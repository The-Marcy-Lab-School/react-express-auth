import { Link, useParams} from 'react-router-dom';
import ReviewModal from '../components/ReviewModal';
import { doctors } from './Home';


export default function DoctorReview ( ){
   
    console.log({ doctors })
    let { id } = useParams();
    const doctor = doctors.find((doctor) => doctor.id === parseInt(id))

    console.log(id);


    return <>
    <article>
        <div className="imgandspecialty">
            <img src={doctor.picture} alt='Doctor Picture' className="personImg"/>
            <h3 className="specialty">{doctor.specialty}</h3>
            <h4 className="location">{doctor.location}</h4>
        </div>

        <div>
            <h2 className="name"> {doctor.name} </h2>
            <div className="overallrating">{ doctor.overallrating }</div>
        </div>
        <ReviewModal />

    </article>
    </>
}