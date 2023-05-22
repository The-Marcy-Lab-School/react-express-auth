const isAuthError = (err) => (err.status === 401 || err.status === 403);
const redirectToLogin = () => window.location.assign('/login.html');
const renderUsername = (username) => {
  document.querySelector('#username').textContent = username;
};

const handleLogout = async (event) => {
  event.preventDefault();
  const options = { method: 'DELETE' };
  const url = '/api/users/logout';
  const [_response, err] = await window.handleFetch(url, options);
  if (err) return alert('Something went wrong');
  window.location.assign('/');
};

const handleUpdateUsername = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const username = formData.get('username');
  if (!username) return alert('Username is required');

  const url = `/api/users/${form.dataset.userId}`;
  const options = window.getFetchOptions({ username }, 'PATCH');

  const [response, err] = await window.handleFetch(url, options);
  if (err) return isAuthError(err) ? redirectToLogin() : alert('Something went wrong');

  form.reset();
  renderUsername(response.username);
};

const main = async () => {
  const user = await window.fetchLoggedInUser();
  if (!user) return redirectToLogin();

  const logoutForm = document.querySelector('#logout-form');
  const updateUsernameForm = document.querySelector('#username-form');

  logoutForm.addEventListener('submit', handleLogout);
  updateUsernameForm.addEventListener('submit', handleUpdateUsername);
  updateUsernameForm.dataset.userId = user.id;

  window.setNav(!!user);
  renderUsername(user.username);
};

main();
