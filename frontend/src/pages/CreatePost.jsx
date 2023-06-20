import { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/page-adapter";
import { checkForLoggedInUser } from "../adapters/auth-adapter";

export default function CreatePost() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [loggedIn, setLoggedIn] = useState(null);
  const [user_id, setUser_id] = useState(0);
  const [errorText, setErrorText] = useState('');
  const [facility_doctor, setFacility_doctor] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDesciption] = useState('');
  const [address, setAddress] = useState('');
  const [overall_rating, setOverall_rating] = useState(0);
  const [is_facility, setFacility] = useState(false);
  const [is_doctor, setDoctor] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');

    const user_id = loggedIn.id;
    const [user, error] = await createPost({
      user_id,
      facility_doctor,
      specialty,
      description,
      address,
      overall_rating,
      is_facility,
      is_doctor,
      photo
    });

    if (error) {
      return setErrorText(error.statusText);
    }

    // setCurrentUser(user);
    navigate('/home'); // Navigate to the home page
  };


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      if (name === 'is_facility') {
        setFacility(checked);
      }
      if (name === 'is_doctor') {
        setDoctor(checked);
      }
    } else {
      if (name === 'facility_doctor') setFacility_doctor(value);
      if (name === 'specialty') setSpecialty(value);
      if (name === 'description') setDesciption(value);
      if (name === 'address') setAddress(value);
      if (name === 'overall_rating') setOverall_rating(value);
      if (name === 'photo') setPhoto(value);
    }
  };
    
      return <>
      <div>
        <h4>Cant find your Health care professional or facility? Fill out the following form to be able to Create that doctor or facility for later use. </h4>
      </div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
      <label htmlFor="facility_doctor">Name</label>
      <input
        autoComplete="off"
        type="text"
        id="facility_doctor"
        name="facility_doctor"
        onChange={handleChange}
        value={facility_doctor}
      />

      <label htmlFor="specialty">Specialty</label>
      <input
        autoComplete="off"
        type="text"
        id="specialty"
        name="specialty"
        onChange={handleChange}
        value={specialty}
      />

      <label htmlFor="description">Description</label>
      <input
        autoComplete="off"
        type="text"
        id="description"
        name="description"
        onChange={handleChange}
        value={description}
      />

  <label htmlFor="address">Address</label>
      <input
        autoComplete="off"
        type="text"
        id="address"
        name="address"
        onChange={handleChange}
        value={address}
      />
       <label htmlFor="overall_rating">Give the Doctor or Facility a over all rating</label>
       <input
        autoComplete="off"
        type="number"
        min={1}
        max={5}
        id="overall_rating"
        name="overall_rating"
        onChange={handleChange}
        value={overall_rating}
      />


    <label htmlFor="is_facility">Is this a Facility?</label>
    <input type="checkbox" id="is_facility" name="is_facility" onChange={handleChange}/>

    <label htmlFor="is_doctor">Is this a Doctor?</label>
    <input type="checkbox" id="is_doctor" name="is_doctor" onChange={handleChange}/>

      <label htmlFor="photo">Upload Photo</label>
      <input type="text" id="photo" name="photo" onChange={handleChange}></input>


      <button>Create Now!</button>
      </form>
      
      </>
}