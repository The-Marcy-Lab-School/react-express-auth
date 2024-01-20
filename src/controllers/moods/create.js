const createMood = async (req, res) => {
    const {
        params: { user_id },
        db: { Moods },
        body: { mood, level },
      } = req;

    const newMood = await Moods.createMood(mood, level, user_id);
    res.send(newMood);
};

module.exports = createMood;