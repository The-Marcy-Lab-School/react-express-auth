const average = async (req, res) => {
    const {
     db: { Logs }, 
       body: {user_id}, 
    } = req;

    const logAvg = await Logs.findAvg(user_id);
      res.json(logAvg);
    
};
module.exports = average
