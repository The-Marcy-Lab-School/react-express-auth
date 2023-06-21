const varifyJoin = async (req, res) => {
    const {
      session,
      db: { Susu },
      body: { user_id, susu_id, make_payments, password},
    } = req;
    let susu = Susu.show(susu_id)
    const isPasswordValid = await susu.isValidPassword(password);
    console.log(susu)
  if (!isPasswordValid) return res.sendStatus(401);
  
    // TODO: check if username is taken, what should you return?
    const card = await Susu.add(Number(user_id), Number(susu_id), make_payments);
  
    res.send(card);
  };
  
  module.exports = varifyJoin;
  