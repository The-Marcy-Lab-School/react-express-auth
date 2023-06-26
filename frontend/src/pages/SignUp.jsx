import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [age, setUserAge] = useState('');
  const [gender, setUserGender] = useState('');
  const [race, setUserRace] = useState('');
  const [ethnicity, setUserEthnicity] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ first_name, last_name, age, gender, race, ethnicity, username, password, email, picture });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'first_name') setFirstName(value);
    if (name === 'last_name') setLastName(value);
    if (name === 'age') setUserAge(value);
    if (name === 'gender') setUserGender(value);
    if (name === 'race') setUserRace(value);
    if (name === 'ethnicity') setUserEthnicity(value);
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    if (name === 'picture') setPicture(value);
  };
  //  console.log(handleChange(e))
  return (
    <>
      <div id="signup-component">
        <div id="signup-content">
          <div id="signup-text">
            <h1>Sign Up</h1>
          </div>
          <form id="signup-form" onSubmit={handleSubmit} onChange={handleChange}>
            <div className="field">
              <label htmlFor="first_name" className="label">
                First Name
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="text"
                  id="first_name"
                  name="first_name"
                  onChange={handleChange}
                  value={first_name}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="last_name" className="label">
                Last Name
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="text"
                  id="last_name"
                  name="last_name"
                  onChange={handleChange}
                  value={last_name}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="age" className="label">
                Age
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="number"
                  id="age"
                  name="age"
                  onChange={handleChange}
                  value={age}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="gender" className="label genderlabel">
                Gender
              </label>
              <div className="control">
                <div className="select">
                  <select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={gender}
                  >
                    <option value="">Select a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="race" className="label">
                Race
              </label>
              <div className="control">
                <div className="select">
                  <select
                    id="race"
                    name="race"
                    onChange={handleChange}
                    value={race}
                  >
                    <option value="">Select a race</option>
                    <option value="asian">Asian</option>
                    <option value="black">Black</option>
                    <option value="latino">Latino</option>
                    <option value="american indian or alaska native">
                      American Indian or Alaska Native
                    </option>
                    <option value="Native Hawaiian or Other Pacific Islander">
                      Native Hawaiian or Other Pacific Islander
                    </option>
                    <option value="white">White</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="ethnicity" className="label">
                Ethnicity
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="text"
                  id="ethnicity"
                  name="ethnicity"
                  onChange={handleChange}
                  value={ethnicity}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="username" className="label">
                Username
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  value={username}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  className="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="picture" className="label">
                Picture
              </label>
              <div className="control">
                <input
                  autoComplete="off"
                  type="picture"
                  id="picture"
                  name="picture"
                  onChange={handleChange}
                  value={picture}
                  className="input"
                />
              </div>
            </div>

            {/* Additional validation inputs can be added here */}

            <div className="field">
              <div id="signup-button" className="control">
                <button type="submit" className="button is-link sign_up">
                  Sign Up Now!
                </button>
              </div>
            </div>
          </form>
          {!!errorText && <p>{errorText}</p>}
          <div id="already">
            <p>- Already have an account with us?  <Link to="/login">Log in!</Link> -</p>
          </div>
        </div>
      </div>
    </>
  );
}
/* 
In reality, we'd want a LOT more validation on signup, so add more things if you have time
  <label htmlFor="password-confirm">Password Confirm</label>
  <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
*/