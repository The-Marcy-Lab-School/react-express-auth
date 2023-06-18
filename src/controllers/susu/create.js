const createSusu = async (req, res) => {
  const {
    session,
    db: { Susu },
    body: { name, password_hash, owner, payment_amount, next_payment },
  } = req;

  console.log(name, password_hash, owner, payment_amount, next_payment);

  // TODO: check if username is taken, what should you return?
  const susu = await Susu.create(name, password_hash, Number(owner), Number(payment_amount), Number(next_payment));

  res.send(susu);
};

module.exports = createSusu;
