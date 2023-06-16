const createSusu = async (req, res) => {
  const {
    session,
    db: { Susu },
    body: { name, password,userId, paymentAmount, nextPayment },
  } = req;

  console.log(name, password, userId, paymentAmount, nextPayment)

  // TODO: check if username is taken, what should you return?
  const susu = await Susu.create(name, password, userId, paymentAmount, nextPayment);

  res.send(susu);
};

module.exports = createSusu;
