import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) return setErrorText(error.message);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to={`/users/${user.id}`} />;

  return <>
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1C1E1F] text-white">
      <h1 className="text-5xl mb-10">Log In!</h1>
      <form onSubmit={handleSubmit} aria-labelledby="login-heading" className="mt-5 flex flex-col bg-[#989A99] p-10 rounded-lg">
        <h2 id='login-heading' className="text-3xl mb-6">Log back in!</h2>
        <label htmlFor="username">Username</label>
        <input type="text" autoComplete="username" id="username" name="username" className="text-black" />

        <label htmlFor="password">Password</label>
        <input type="password" autoComplete="current-password" id="password" name="password" className="text-black" />

        <button className="text-2xl mt-10 p-2 border-2 border-black">Log in!</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
      <p className="mt-5 text-lg">Don't have an account with us? <Link to="/sign-up" className="underline">Sign Up!</Link></p>
    </div>
  </>;
}
