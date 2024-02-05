const createLog = async (req, res) => {
    const {
      db: { Logs }, 
      body: { mood, abd_pain, back_pain, nausea, fatigue, user_id }, 
    } = req;
  
  
    const logs = await Logs.create( mood, abd_pain, back_pain, nausea, fatigue, user_id);
  
    res.send(logs);
  };
  
  module.exports = createLog;