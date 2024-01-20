const deleteMood = async (req, res) => {
    const {
        params: { user_id },
        db: { Moods },
        body: { mood, level },
    } = req;

    const deletedMood = await Moods.deleteMood(mood, level, user_id);
    res.send(deletedMood);
};

module.exports = deleteMood;