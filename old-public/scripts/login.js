const main = async () => {
  const user = await window.fetchLoggedInUser();
  if (user) return window.location.assign('/user.html');

  window.setNav();
  document.querySelector('#create-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      window.signupAndLoginHandler('/api/users/login', event.target);
    });
};

main();
