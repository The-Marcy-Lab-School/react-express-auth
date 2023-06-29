import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Bookmarkcard({ bookmark }) {


  return (
    <div className="entiredoctorCard">
    <div
      className="doctorImage"
      style={{ backgroundImage: `url(${bookmark.photo})` }}

    ></div>
    <div className="doctorInformation" >
      <h4>
        {" "}
        {bookmark.facility_doctor}{" "}
        <FontAwesomeIcon icon={faBookmark} />
      </h4>
      <h6>{bookmark.specialty}</h6>
      <h6>{bookmark.address}</h6>
      <p className="testdoctordescription">"{bookmark.description}"</p>
    </div>
  </div>
 
      // <div  id="bookmarkbox">
      //   <div className="headerBookmark">
      //   <p id="bookmarkDoctorSpecailty">
      //     {bookmark.facility_doctor} - {bookmark.specialty}
      //   </p>
      //   <p className="has-text-centered" id="bookmarkAddress">
      //     {bookmark.address}
      //   </p>
      //   </div>
        
      //   <div className="columns">
      //     <div className="column is-one-third" style={{ width:"100%"} }>
      //       <div id= 'saveddocimg' >
      //         <img
      //           src={bookmark.photo}
      //           alt="Image"
      //           style={{ width: "100px", height: "100px" }}
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </div>

  );
}
