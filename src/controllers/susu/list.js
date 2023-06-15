const listSusu = async (req, res) => {
  const {
    // session : { userId },
    params: { user_id },
    db: { Susu },
  } = req;
  // console.log(req)
  const susu = await Susu.list(user_id);
  if (!susu) return res.status(404).send('Susu not found');
  res.send(susu);
};

module.exports = listSusu;
