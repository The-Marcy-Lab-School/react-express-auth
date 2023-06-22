const varifyJoin = async (req, res) => {
    const {
      session,
      db: { Susu },
      body: { user_id, susu_id, make_payments},
    } = req;
    console.log(susu_id, user_id, make_payments)
  
    // TODO: check if username is taken, what should you return?
    const card = await Susu.updatepayment(Number(user_id), Number(susu_id), make_payments);
  
    res.send(card);
  };
  
  module.exports = varifyJoin;
  