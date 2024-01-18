import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { deleteUser } from '../adapters/user-adapter'

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [task, setTask] = useState({})

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
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target).entries();
    console.log(formData)
    // const [user, error] = await logUserIn(Object.fromEntries(formData));
    // if (error) return setErrorText(error.message);
    // setCurrentUser(user);
    // navigate(`/users/${user.id}`);
    for (let [key, value] of formData) {
      console.log(key, value);
  }
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>
    <h1>{profileUsername}</h1>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button>}
     <button> Delete Account</button>
    <p>If the user had any data, here it would be</p>
    <p>Fake Bio or something</p>
    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }

    

<form onSubmit={handleSubmit} aria-labelledby="login-heading">
      <h2 id='login-heading'>Log back in!</h2>
      <label htmlFor="task">task</label>
      <input type="text" autoComplete="task" id="task" name="username" />

      <label htmlFor="description">description</label>
      <input type="text" autoComplete="current-password" id="description" name="description" />

      <button>Log in!</button>
    </form>

    <section>
      {}
      </section>
  </>;
}
