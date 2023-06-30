import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Typeahead from "../components/SearchBar";
import DoctorContext from "../contexts/DoctorContext";

export default function ComparePage() {
  let { id } = useParams();
  const [individualDoctor, setIndividualDoctor] = useState([]);
  const [doctorReview, setDoctorReview] = useState([]);
  const [doctorName, setDoctorName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [secondDoctorCompare, setSecondDoctorCompare] = useState("");
  const { doctors, filteredObject, setFilteredObject } =
    useContext(DoctorContext);
  const defaultObj = {
    address: "N/A",
    description: "N/A",
    facility_doctor: "N/A",
    id: "N/A",
    is_doctor: "N/A",
    is_facility: "N/A",
    photo:
      "https://worldrefiningassociation.com/wp-content/uploads/placeholder-speaker-l-2.jpg",
    specialty: "N/A",
    user_id: "N/A",
  };

  useEffect(() => {
    const getIndividualDoctor = async () => {
      console.log("adapter", id);
      const response = await fetch(`/api/pages/${id}`);
      const data = await response.json();
      setIndividualDoctor(data);
    };
    const getReviews = async () => {
      const response = await fetch(`/api/reviews/${id}`);
      const data = await response.json();
      setDoctorReview(data);
    };
    getIndividualDoctor();
    getReviews();
  }, []);

  const ratings = doctorReview.map((review) => review.rating);
  const averageRating =
    ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;

  const allFriendliness = doctorReview.map(
    (review) => review.staff_friendliness
  );
  const averageStaffFriendliness =
    allFriendliness.reduce(
      (sum, friendlinessScore) => sum + friendlinessScore,
      0
    ) / allFriendliness.length;

  const allWaitTimes = doctorReview.map((review) => review.wait_times);
  const averageWaitTimes =
    allWaitTimes.reduce((sum, waitTimeScore) => sum + waitTimeScore, 0) /
    allWaitTimes.length;

  const allQualityOfCare = doctorReview.map((review) => review.quality_of_care);
  const averageQualityOfCare =
    allQualityOfCare.reduce(
      (sum, qualityOfCareScore) => sum + qualityOfCareScore,
      0
    ) / allQualityOfCare.length;

  let starone = "⭐️";
  let startwo = "⭐️ ⭐️";
  let starthree = "⭐️ ⭐️ ⭐️";
  let starfour = "⭐️ ⭐️ ⭐️ ⭐️";
  let starfive = "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
  let starRating;
  let starFriendliness;
  let starWait;
  let starCare;
  switch (averageRating) {
    case 1:
      starRating = starone;
      break;
    case 2:
      starRating = startwo;
      break;
    case 3:
      starRating = starthree;
      break;
    case 4:
      starRating = starfour;
      break;
    case 5:
      starRating = starfive;
      break;
    default:
      starRating = ""; // handle cases where rating is not 1-5
  }
  const calculateStarRating = (averageRating) => {
    if (averageRating >= 0.5 && averageRating < 1.5) {
      return starone;
    } else if (averageRating >= 1.5 && averageRating < 2.5) {
      return startwo;
    } else if (averageRating >= 2.5 && averageRating < 3.5) {
      return starthree;
    } else if (averageRating >= 3.5 && averageRating < 4.5) {
      return starfour;
    } else if (averageRating >= 4.5) {
      return starfive;
    } else {
      return ""; // handle cases where rating is not within 0.5-5 range
    }
  };

  // Update the switch statements
  starFriendliness = calculateStarRating(averageStaffFriendliness);
  starWait = calculateStarRating(averageWaitTimes);
  starCare = calculateStarRating(averageQualityOfCare);

  const handleSearchChange = (e) => {
    const {
      target: { value: userInput },
    } = e;
    const filteredDoctorList = doctors.filter((doctor) =>
      doctor.facility_doctor.toLowerCase().includes(userInput)
    );
    setSecondDoctorCompare(filteredDoctorList[0]);

    // console.log("FILTERED", filteredDoctorList[0]);
  };
<<<<<<< HEAD
  console.log("seconddocstate", secondDoctorCompare);
=======
  // console.log(secondDoctorCompare.photo)
  function compare(secondDoc){
    if(secondDoctorCompare){
      return secondDoctorCompare[secondDoc]
    }
      return defaultObj[secondDoc]
  }

>>>>>>> kristen

  return (
    <>
      <div className="compare-page">
        <div className="imgandspecialty">
          <div className="doctorPictureFrame">
            <img
              src={individualDoctor.length > 0 ? individualDoctor[0].photo : ""}
              alt="Doctor Picture"
              id="personImg"
            />
          </div>
          <div className="specifications">
            <h2 className="name">
              {individualDoctor.length > 0
                ? individualDoctor[0].facility_doctor
                : ""}
            </h2>
            <h4 className="location">
              {individualDoctor.length > 0 ? individualDoctor[0].address : ""}
            </h4>
            <h3 className="specialty">
              {individualDoctor.length > 0 ? individualDoctor[0].specialty : ""}
              : {starRating}
            </h3>
            <p className="description">
              {individualDoctor.length > 0
                ? individualDoctor[0].description
                : ""}
            </p>
          </div>
          <div className="categories-all">
            <p>Staff Friendliness: {starFriendliness}</p>
            <p>Wait Times: {starWait}</p>
            <p>Quality of Care: {starCare}</p>
          </div>
        </div>
        <div className="all-cats">
          <div className="comparison">
            <h1>Score Comparison</h1>
          </div>
          <br />
          <div className="categories-criterion">
            <div className="staff-friend">
              <p className="comparison">Staff Friendliness</p>
              <p>{starFriendliness} to </p>
            </div>

            <br />
            <div className="staff-friend">
              <p className="comparison">Wait Times</p>
              <p>{starWait} to </p>
            </div>

            <br />
            <div className="staff-friend">
              <p className="comparison">Quality of Care</p>
              <p>{starCare} to </p>
            </div>
          </div>
          <br />
        </div>
        <div className="imgandspecialty">
          <input
            // options={options}
            // setInputValue={setInputValue}
            // inputValue={inputValue}
            onChange={handleSearchChange}
          />
          <div className="doctorPictureFrame">
            <img
<<<<<<< HEAD
              src={secondDoctorCompare.photo}
=======
              src={compare("photo")}
>>>>>>> kristen
              alt="Doctor Picture"
              id="personImg"
            />
          </div>
          <div className="specifications">
            <h2 className="name">
<<<<<<< HEAD
            {secondDoctorCompare.name}
            </h2>
            <h4 className="location">
            {secondDoctorCompare.address}
            </h4>
            <h3 className="specialty">
            {secondDoctorCompare.specialty}
              : Stars
            </h3>
            <p className="description">
            {secondDoctorCompare.description}
=======
              {compare("facility_doctor")}
            </h2>
            <h4 className="location">
              {compare("address")}
            </h4>
            <h3 className="specialty">
              {compare("specialty")}
              : {starRating}
            </h3>
            <p className="description">
              {compare("description")}
>>>>>>> kristen
            </p>
          </div>
          <div className="categories-all">
            <p>Staff Friendliness: 3</p>
            <p>Wait Times: 2</p>
            <p>Quality of Care: 1</p>
          </div>
        </div>
      </div>
    </>
  );
}
