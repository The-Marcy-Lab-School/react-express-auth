import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../adapters/user-adapter";

export default function SettingsPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  if (!currentUser) return <Navigate to='/' />

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData);
    const [user, error] = await updateUser(formData);
    // If our user isn't who they say they are
    // (an auth error on update) log them out
    // We added the httpStatus as a custom cause in our error
    if (error?.cause > 400 && error?.cause < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    setCurrentUser(user);
    event.target.reset();
  };

  return <form onSubmit={handleSubmit} aria-labelledby="update-heading">
    <h2 id="update-heading">Update User {currentUser.username} </h2>
    <div>
      <label htmlFor='bio-input'>New Bio</label>
      <textarea placeholder='Enter your bio here...' id='bio-input' name='bio' />
    </div>
    <div>
      <label htmlFor='username-input'>New Username</label>
      <input placeholder='New Username' type='text' id='username-input' name='username' />
    </div>
    <div>
      <label htmlFor='password-input'>New Password</label>
      <input placeholder='New Password' id='password-input' name='password' />
    </div>

    <input type="hidden" name="id" value={currentUser.id} />

    <button>Submit</button>
  </form>;
}
