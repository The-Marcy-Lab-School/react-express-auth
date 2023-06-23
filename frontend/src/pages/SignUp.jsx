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

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ first_name, last_name, age, gender, race, ethnicity, username, password, email });
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
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="field">
          <label className="label" htmlFor="first_name">First Name</label>
          <div className="control">
            <input
              autoComplete="off"
              type="text"
              id="first_name"
              name="first_name"
              value={first_name}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="last_name">Last Name</label>
          <div className="control">
            <input
              autoComplete="off"
              type="text"
              id="last_name"
              name="last_name"
              value={last_name}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="age">Age</label>
          <div className="control">
            <input
              autoComplete="off"
              type="number"
              id="age"
              name="age"
              value={age}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="gender">Gender</label>
          <div className="control">
            <div className="select">
              <select
                id="gender"
                name="gender"
                value={gender}
                className="input"
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
          <label className="label" htmlFor="race">Race</label>
          <div className="control">
            <div className="select">
              <select
                id="race"
                name="race"
                value={race}
                className="input"
              >
                <option value="">Select a race</option>
                <option value="asian">Asian</option>
                <option value="black">Black</option>
                <option value="latino">Latino</option>
                <option value="american indian or alaska native">American Indian or Alaska Native</option>
                <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                <option value="white">White</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="ethnicity">Ethnicity</label>
          <div className="control">
            <input
              autoComplete="off"
              type="text"
              id="ethnicity"
              name="ethnicity"
              value={ethnicity}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="username">Username</label>
          <div className="control">
            <input
              autoComplete="off"
              type="text"
              id="username"
              name="username"
              value={username}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">Password</label>
          <div className="control">
            <input
              autoComplete="off"
              type="password"
              id="password"
              name="password"
              value={password}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <div className="control">
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              value={email}
              className="input"
            />
          </div>
        </div>

        <button className="button is-link">Sign Up Now!</button>
      </form>

      {!!errorText && <p>{errorText}</p>}

      <p>
        Already have an account with us? <Link to="/login">Log in!</Link>
      </p>
    </>
  );
}
