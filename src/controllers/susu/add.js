const createCard = async (req, res) => {
    const {
      session,
      db: { Susu },
      body: { user_id, susu_id, make_payments},
    } = req;
  
  
    // TODO: check if username is taken, what should you return?
    const card = await Susu.add(Number(user_id), Number(susu_id), make_payments);
  
    res.send(card);
  };
  
  module.exports = createCard;
  