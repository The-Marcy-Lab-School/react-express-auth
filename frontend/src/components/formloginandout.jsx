import React, { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { logUserIn } from '../adapters/auth-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import { useErrorStore } from '../store/store';
import { createUser } from '../adapters/user-adapter';

// import './styles/App.css';

const Form = () => {
  const [activeTab, setActiveTab] = useState('management');

  const Management = () => {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const errorText = useErrorStore((state) => state.errorText);
    const setErrorText = useErrorStore((state) => state.setErrorText);

    const handleSubmit = async (event) => {
      event.preventDefault();
      setErrorText('');
      const formData = new FormData(event.target);
      const [user, error] = await logUserIn(Object.fromEntries(formData));
      if (error) return setErrorText(error.message);
      setCurrentUser(user);
      navigate(`/about`);

      console.log(Object.fromEntries(formData));
    };

    // if (currentUser) return <Navigate to="/community" />;

    return (
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            aria-labelledby="login-heading"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{
                  borderRadius: '5px',
                  background: 'linear-gradient(225deg, #ff3126, #c30a00)',
                  boxShadow:
                    '-5px 5px 10px rgba(195, 10, 0, 0.5), 5px -5px 10px rgba(255, 49, 38, 0.5)',
                  transition: 'boxShadow 0.3s ease-in-out',
                }}
              >
                Sign in
              </button>
            </div>
          </form>

          {!!errorText && <p>{errorText}</p>}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a part of the crew?{' '}
            <a
              href="#"
              onClick={() => setActiveTab('events')}
              className="font-semibold leading-6 text-red-500 hover:text-red-200"
            >
              Join Us!
            </a>
          </p>
        </div>
      </div>
    );
  };

  function Events() {
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
      navigate('/about');
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'username') setUsername(value);
      if (name === 'password') setPassword(value);
      if (name === 'name') setfullName(value);
      if (name === 'email') setEmail(value);
    };

    return (
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            onChange={handleChange}
            aria-labelledby="create-heading"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  value={username}
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete="current-password"
                  required
                  onChange={handleChange}
                  value={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  // autoComplete="current-password"
                  required
                  onChange={handleChange}
                  value={fullName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  // autoComplete="current-password"
                  required
                  onChange={handleChange}
                  value={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={{
                  borderRadius: '5px',
                  background: 'linear-gradient(225deg, #ff3126, #c30a00)',
                  boxShadow:
                    '-5px 5px 10px rgba(195, 10, 0, 0.5), 5px -5px 10px rgba(255, 49, 38, 0.5)',
                  transition: 'boxShadow 0.3s ease-in-out',
                }}
              >
                Sign Up
              </button>
            </div>
          </form>

          {!!errorText && <p>{errorText}</p>}

          <p className="mt-10 text-center text-sm text-gray-500">
            Already In?{' '}
            <a
              href="#"
              onClick={() => setActiveTab('management')}
              className="font-semibold leading-6 text-red-500 hover:text-red-200"
            >
              Log Back In!
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 md:py-8 lg:px-8">
      {activeTab === 'events' && <Events />}
      {activeTab === 'management' && <Management />}
    </div>
  );
};

export default Form;
