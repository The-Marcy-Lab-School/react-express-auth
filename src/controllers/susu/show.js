const showSusu = async (req, res) => {
  const {
    db: { Susu },
    params: { id },
  } = req;

  const susu = await Susu.find(id);
  if (!susu) return res.status(404).send('Susu not found');
  res.send(susu);
};

module.exports = showSusu;
