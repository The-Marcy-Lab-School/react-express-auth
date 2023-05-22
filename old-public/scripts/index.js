const main = async () => {
  const user = await window.fetchLoggedInUser();
  window.setNav(!!user);

  const [secret, _err] = await window.handleFetch('/api/logged-in-secret');
  console.log('secret, _err:', secret, _err);
  if (secret) {
    document.querySelector('#secret-message').textContent = secret.msg;
  }
};

main();
