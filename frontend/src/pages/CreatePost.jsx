import { useState, useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

export default function CreatePost(){
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');
    const [facility_doctor, setFacility_doctor] = useState('');
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [description, setDesciption] = useState('');
     const [fileUpload, setFileUpload] = useState('');

    

    const handleSubmit = async (event) => {
      event.preventDefault();
      setErrorText('');
      if (!username || !password) return setErrorText('Information');
      const [user, error] = await createPost({ facility_doctor, name, specialty, description });
      if (error) return setErrorText(error.statusText);
  
      setCurrentUser(user);
      navigate('/home');
    };

    const handleChange = (event) => {
        // console.log(event)
        const { name, value } = event.target;
        if (name === 'facility_doctor') setFacility_doctor(value);
        if (name === 'name') setName(value);
        if (name === 'specialty') setSpecialty(value);
        if (name === 'description') setDescription(value);
        if (name === 'fileUpload') setFileUpload(value);

      };
      return <>
      <div>
        <h4>Cant find your Health care professional or facility? Fill out the following form to be able to Create that doctor or facility for later use. </h4>
      </div>
      <form onSubmit={handleChange} onChange={handleChange}>
      <label for="facility_doctor">Select Facility or Doctor:</label>
      <select id="facility_doctor" name="facility_doctor">
      <option value="hospital">Facility</option>
      <option value="clinic">Doctor</option>
      </select>

      <label htmlFor="name">Name</label>
      <input
        autoComplete="off"
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
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
        value={specialty}
      />

      <label htmlFor="fileUpload">Upload Photo</label>
      <input type="file" id="fileUpload" name="fileUpload"></input>


      <button>Create Now!</button>
      </form>
      
      </>
}