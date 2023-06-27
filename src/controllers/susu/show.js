const showSusu = async (req, res) => {
  const {
    db: { Susu },
    params: { id }
  } = req;

  const susu = await Susu.show(id);
  
  if (!susu) return res.sendStatus(404)
  res.send(susu);
};

module.exports = showSusu;
