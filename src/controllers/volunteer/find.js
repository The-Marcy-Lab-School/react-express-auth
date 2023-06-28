const { volunteer } = require("../../db/models/volunteer");

const find = async (req, res) => {
    const {
      db: { Volunteer },
      params: { user_id },
    } = req;
  console.log("contr" + user_id)
    const user = await Volunteer.find(user_id);
    if (!user) return res.sendStatus(404);
  
    res.send(user);
  };
  
  module.exports = find;
  