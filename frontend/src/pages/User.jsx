import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>
    <h1>{profileUsername}</h1>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }
    <p>If the user had any data, here it would be</p>
    <p>Fake Bio or something</p>
    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }

{/* <form onSubmit={handleSubmit} aria-labelledby="dailyLog-heading">
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

      <button>Submit</button>
    </form> */}

    <form aria-labelledby="dailyLog-heading">
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
      <input type="range" min="0" max="100" id="abdPain"/>

      <h3>Back Pain</h3>
      <input type="range" min="0" max="100" id="backPain"/>

      <h3>Nausea</h3>
      <input type="range" min="0" max="100" id="nausea"/>

      <h3>Fatigue</h3>
      <input type="range" min="0" max="100" id="fatigue"/>
      <button>Submit</button>
    </form>
  </>;
}
