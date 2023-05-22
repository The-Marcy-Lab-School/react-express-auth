const handleFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const { status, statusText, ok } = response;
    if (!ok) return [null, { status, statusText }];

    const content = (status === 204) || await response.json();
    return [content, null];
  } catch (error) {
    return [null, error];
  }
};

const getFetchOptions = (body, method = 'POST') => ({
  method,
  credentials: 'include', // IMPORTANT, this tells fetch to include cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch('/api/me', { credentials: 'include' });
  return response;
};

const signupAndLoginHandler = async (url, form) => {
  const formData = new FormData(form);
  const options = getFetchOptions(Object.fromEntries(formData.entries()));
  const [_response, err] = await handleFetch(url, options);
  if (err) {
    form.reset();
    return alert('Something went wrong');
  }
  window.location.assign('/user.html');
};

const setNav = (hasLoggedInUser) => {
  const loggedOutNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./create.html">Sign Up</a></li>
    <li><a href="./login.html">Login</a></li>
  </ul>`;

  const loggedInNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./user.html">Profile</a></li>
  </ul>`;

  const navHtml = hasLoggedInUser ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector('nav').innerHTML = navHtml;
};

// This is wonky. Once you learn about bundlers we won't have to
// explicitly create globals. We just lack the tools right now.
Object.assign(window, {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  setNav,
});
