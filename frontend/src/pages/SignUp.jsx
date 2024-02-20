import { useContext, useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { createUser } from '../adapters/user-adapter';

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password)
      return setErrorText('Missing username or password');
    if (!fullName || !password) return setErrorText('Missing name');
    if (!email) return setErrorText('Missing email');

    const [user, error] = await createUser({
      username,
      password,
      fullName,
      email,
    });
    console.log(user);
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'name') setfullName(value);
    if (name === 'email') setEmail(value);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        aria-labelledby="create-heading"
      >
        <h2 id="create-heading">Create New User</h2>
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
        <label htmlFor="name">Name</label>
        <input
          autoComplete="off"
          type="name"
          id="name"
          name="name"
          onChange={handleChange}
          value={fullName}
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

        <button>Sign Up Now!</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
      <p>
        Already have an account with us? <Link to="/login">Log in!</Link>
      </p>
    </>
  );
}
