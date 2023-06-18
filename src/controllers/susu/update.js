const { isAuthorized } = require('../../utils/auth-utils');

const updateSusu = async (req, res) => {
  const {
    session,
    db: { Susu },
    params: { id },
    body: { name, password, owner, paymentAmount, nextPayment },
  } = req;

  // if (!isAuthorized(id, session)) return res.sendStatus(403);

  const susu = await Susu.show(id);
  if (!susu) return res.sendStatus(404);

  const updatedSusu = await Susu.update(id, name, password, owner, paymentAmount, nextPayment);
  console.log(id, name, password, owner, paymentAmount, nextPayment)
  res.send(updatedSusu);
};

module.exports = updateSusu;
