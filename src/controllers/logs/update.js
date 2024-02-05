const update = async (req, res) => {
    const {
     db: { Logs }, 
     params: { logId }, 
     body: {userId, mood, abdominal_pain, backpain, nauseau, fatigue }, 
    } = req;

    const logEntry = await Logs.update(logId, userId, mood, abdominal_pain, backpain, nauseau, fatigue );
      res.json(logEntry);
    
};
module.exports = update
