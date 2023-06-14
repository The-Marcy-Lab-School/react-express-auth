const createSusu = async (req, res) => {
  const {
    session,
    db: { User, Susu },
    body: { name, password, paymentAmount, nextPayment },
  } = req;

  // TODO: check if username is taken, what should you return?
  const susu = await Susu.create(username, password, session.userId, paymentAmount, nextPayment);
  session.userId = user.id;

  res.send(susu);
};

module.exports = createSusu;
