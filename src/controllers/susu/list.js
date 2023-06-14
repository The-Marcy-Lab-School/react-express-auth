const listSusu = async (req, res) => {
  const {
    // session : { userId },
    body: { userId },
    db: { Susu },
  } = req;
  const susu = await Susu.list(userId);
  console.log(userId)
  if (!susu) return res.status(404).send('Susu not found');
  res.send(susu);
};

module.exports = listSusu;
