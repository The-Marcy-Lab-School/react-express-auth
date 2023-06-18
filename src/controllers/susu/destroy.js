const destroySusu = async (req, res) => {
    const { db: { Susu }, params: { id }} = req;
    const susu = await Susu.destroy(id);
    if (!susu) return res.status(404).send('Susu not found');
    res.send(susu);
  };
  
  module.exports = destroySusu;