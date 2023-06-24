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
  const [is_facility, setFacility] = useState(false);
  const [is_doctor, setDoctor] = useState(false);
  const [photo, setPhoto] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    const user_id = loggedIn.id;
    const [user, error] = await createPost({
      user_id,
      facility_doctor,
      specialty,
      description,
      address,
      is_facility,
      is_doctor,
      photo,
    });

    if (error) {
      setErrorText(error.statusText);
    } else {
      // setCurrentUser(user);
      setFormSubmitted(true); // Set the formSubmitted state variable to true
    }
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

  if (name === 'photo') setPhoto(value);
}
  };

  useEffect(() => {
    if (formSubmitted) {
      setFacility_doctor('');
      setSpecialty('');
      setDesciption('');
      setAddress('');
      setFacility(false);
      setDoctor(false);
      setPhoto("");
    }
  }, [formSubmitted]);

  if (formSubmitted) {
    return <Navigate to="/home" />;
  }

return (
    <>
      <div id="createpost-container">
        <div className="container createpost-text">
          <h4 className="subtitle createpost-text-details">
            Can't find your Health care professional or facility? Fill out the following form to be able to Create that
            doctor or facility for later use.
          </h4>
        </div>
        <form className="container createpost-form" onSubmit={handleSubmit} onChange={handleChange}>
          <div className="field">
            <label htmlFor="facility_doctor" className="label">
              Name
            </label>
            <div className="control">
              <input
                autoComplete="off"
                className="input"
                type="text"
                id="facility_doctor"
                name="facility_doctor"
                value={facility_doctor}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="specialty" className="label">
              Specialty
            </label>
            <div className="control">
              <input
                autoComplete="off"
                className="input"
                type="text"
                id="specialty"
                name="specialty"
                value={facility_doctor}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="description" className="label">
              Description
            </label>
            <div className="control">
              <input
                autoComplete="off"
                className="input"
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="address" className="label">
              Address
            </label>
            <div className="control">
              <input
                autoComplete="off"
                className="input"
                type="text"
                id="address"
                name="address"
                value={overall_rating}
                onChange={handleChange}
              />
            </div>
          </div>


          <div className="field">
            <div className="control checkbox-field">
              <label htmlFor="is_facility" className="checkbox">
                Is this a Facility?
                <input
                type="checkbox"
                id="is_facility"
                name="is_facility"
                checked={is_facility}
                onChange={handleChange}
              />
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control checkbox-field">
              <label htmlFor="is_doctor" className="checkbox">
                Is this a Doctor?
                <input
                type="checkbox"
                id="is_doctor"
                name="is_doctor"
                checked={is_doctor}
                onChange={handleChange}
              />
              </label>
            </div>
          </div>

          <div className="field">
            <label htmlFor="photo" className="label">
              Upload Photo
            </label>
            <div className="control">
              <input type="text" id="photo" name="photo" className="input" onChange={handleChange} />
            </div>
          </div>

          <div className="field createpost-submit-button">
            <div className="control">
              <button type="submit" className="button is-link">
                Create Now!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
