// const updateMood = async (req, res) => {
//     const {
//         params: { user_id },
//         db: { Moods },
//         body: { mood, level },
//     } = req;

//     const updatedMood = await Moods.updateMood(mood, level, user_id);
//     res.send(updatedMood);
// };

// module.exports = updateMood;