const listSusu = async (req, res) => {
  const {
    params: { user_id },
    db: { Susu },
  } = req;
  const susu = await Susu.list(user_id);
  if (!susu) return res.status(404).send('Susu not found');
  res.send(susu);
};

module.exports = listSusu;
