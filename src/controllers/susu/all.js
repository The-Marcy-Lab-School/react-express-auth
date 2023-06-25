const AllSusu= async (req, res) => {
    const {
      db: { Susu },
    } = req;
    const susu = await Susu.all();
    if (!susu) return res.status(404).send('Susu not found');
    res.send(susu);
  };
  
  module.exports = AllSusu;
  