import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');
    if (password !== passwordCheck) return setErrorText('Passwords do not match');
    console.log(username, password)
    const [user, error] = await createUser({ username, password });
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'passwordCheck') setPasswordCheck(value);
  };

  // const checkChange = () => {
    
  // }

  return <>
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1C1E1F] text-white">
      <h1 className="text-5xl mb-10">Sign Up!</h1>
      <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading" className="mt-5 flex flex-col bg-[#989A99] p-10 rounded-lg">
        <h2 id="create-heading" className="text-3xl mb-6">Create New User</h2>
        <label htmlFor="username">Username</label>
        <input
          className="text-black"
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={username}
        />

        <label htmlFor="password">Password</label>
        <input
          className="text-black"
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
         
         <label htmlFor="passwordCheck">Confirm Password</label>
        <input
          className="text-black "
          autoComplete="off"
          type="password"
          id="passwordCheck"
          name="passwordCheck"
          onChange={handleChange}
          value={passwordCheck}
        />

        {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <input autoComplete="off" type="password" id="passwordCheck" name="passwordConfirm" />
      */}

        <button className="text-2xl mt-10 p-2 border-2 border-black">Sign Up Now</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
      <p className="mt-5 text-lg">Already have an account with us? <Link to="/login" className="underline">Log in!</Link></p>
    </div>
  </>;
}
