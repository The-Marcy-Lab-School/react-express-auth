const listMoods = async (req, res) => {
    const {
        db: { Moods },
    } = req;

    const userMoods = await Moods.listAllMoods();
    res.send(userMoods);
};

module.exports = listMoods;