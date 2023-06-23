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
  const [errorText, setErrorText] = useState("");
  const [facility_doctor, setFacility_doctor] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [overall_rating, setOverall_rating] = useState(0);
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
      overall_rating,
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

    if (type === "checkbox") {
      if (name === "is_facility") {
        setFacility(checked);
      }
      if (name === "is_doctor") {
        setDoctor(checked);
      }
    } else {
      if (name === "facility_doctor") setFacility_doctor(value);
      if (name === "specialty") setSpecialty(value);
      if (name === "description") setDescription(value);
      if (name === "address") setAddress(value);
      if (name === "overall_rating") setOverall_rating(value);
      if (name === "photo") setPhoto(value);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      setFacility_doctor("");
      setSpecialty("");
      setDescription("");
      setAddress("");
      setOverall_rating(0);
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
      <div>
        <h4>
          Cant find your Health care professional or facility? Fill out the
          following form to be able to Create that doctor or facility for later
          use.
        </h4>
      </div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="field">
          <label className="label" htmlFor="facility_doctor">
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
          <label className="label" htmlFor="specialty">
            Specialty
          </label>
          <div className="control">
            <input
              autoComplete="off"
              className="input"
              type="text"
              id="specialty"
              name="specialty"
              value={specialty}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="description">
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
          <label className="label" htmlFor="address">
            Address
          </label>
          <div className="control">
            <input
              autoComplete="off"
              className="input"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="overall_rating">
            Give the Doctor or Facility an overall rating
          </label>
          <div className="control">
            <input
              autoComplete="off"
              className="input"
              type="number"
              min={1}
              max={5}
              id="overall_rating"
              name="overall_rating"
              value={overall_rating}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                id="is_facility"
                name="is_facility"
                checked={is_facility}
                onChange={handleChange}
              />
              Is this a Facility?
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                id="is_doctor"
                name="is_doctor"
                checked={is_doctor}
                onChange={handleChange}
              />
              Is this a Doctor?
            </label>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="photo">
            Upload Photo
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              id="photo"
              name="photo"
              value={photo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Create Now!</button>
          </div>
        </div>
      </form>
    </>
  );
}

