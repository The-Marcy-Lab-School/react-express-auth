import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
// import { logUserIn } from "../adapters/auth-adapter";
// import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
//   const navigate = useNavigate();
//   const [errorText, setErrorText] = useState('');
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    // const [user, error] = await logUserIn(Object.fromEntries(formData));
    // if (error) return setErrorText(error.message);
    // setCurrentUser(user);
    // navigate(`/users/${user.id}`);
  };

//   if (currentUser) return <Navigate to="/" />;

  return <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit} aria-labelledby="dailyLog-heading">
      <h2 id='dailyLog-heading'>Welcome Back!</h2>
      <h3>How are you feeling today?</h3>

      <input type="radio" id="worst" name="mood" value = "1"/>
      <label htmlFor="worst">Worst</label>

      <input type="radio" id="notGood" name="mood" value="2"/>
      <label for="notGood">Not Good</label>

      <input type="radio" id="fine" name="mood" value="3"/>
      <label for="fine">Fine</label>

      <input type="radio" id="good" name="mood" value="4"/>
      <label for="good">Good</label>

      <input type="radio" id="veryGood" name="mood" value="5"/>
      <label for="veryGood">Very Good</label>

      <h3>Abdominal Pain</h3>
      <input type="range" min="0" max="100" value="50" class="slider" id="abdPain"/>

      <h3>Back Pain</h3>
      <input type="range" min="0" max="100" value="50" class="slider" id="backPain"/>

      <h3>Nausea</h3>
      <input type="range" min="0" max="100" value="50" class="slider" id="nausea"/>

      <h3>Fatigue</h3>
      <input type="range" min="0" max="100" value="50" class="slider" id="fatigue"/>

      {/* <label htmlFor="password">Password</label>
      <input type="password" autoComplete="current-password" id="password" name="password" /> */}

      <button>Submit</button>
    </form>
    { !!errorText && <p>{errorText}</p> }
  </>;
};
