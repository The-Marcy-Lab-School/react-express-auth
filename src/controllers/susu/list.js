const listSusu = async (req, res) => {
  const { Susu } = req.db;
  const susu = await Susu.list();
  res.send(susu);
};

module.exports = listSusu;
