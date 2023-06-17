import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

// Controlling the signup form is a good idea because we want to adde (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
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

  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ first_name, last_name, age, gender, race, ethnicity, username, password, email});
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    // console.log(event)
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
  return <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} onChange={handleChange}>
    <label htmlFor="first_name">First Name</label>
      <input
        autoComplete="off"
        type="text"
        id="first_name"
        name="first_name"
        onChange={handleChange}
        value={first_name}
      />

      <label htmlFor="last_name">Last Name</label>
      <input
        autoComplete="off"
        type="text"
        id="last_name"
        name="last_name"
        onChange={handleChange}
        value={last_name}
      />

      <label htmlFor="age">Age</label>
      <input
        autoComplete="off"
        type="number"
        id="age"
        name="age"
        onChange={handleChange}
        value={age}
      />

      <label htmlFor="gender">Gender</label>
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

      <label htmlFor="race">Race</label>
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
      <option value='american indian or alaska native'>American Indian or Alaska Native</option>
      <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
      <option value="white">White</option>
      <option value="other">Other</option>
      </select>

      <label htmlFor="ethnicity">Ethnicity</label>
      <select
      id="ethnicity"
      name="ethnicity"
      onChange={handleChange}
      value={ethnicity}
      >
      <option value="">Select an ethnicity</option>
      <option value="hispanic">Hispanic or Latino</option>
      <option value="nonHispanic">Non-Hispanic or Latino</option>
      </select>


      <label htmlFor="username">Username</label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
      />

      <label htmlFor="password">Password</label>
      <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />

      <label htmlFor="email">Email</label>
      <input
        autoComplete="off"
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />

      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      <button>Sign Up Now!</button>
    </form>
    { !!errorText && <p>{errorText}</p> }
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
  </>;
}
