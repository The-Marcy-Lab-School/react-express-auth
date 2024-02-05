const createLog = async (req, res) => {
    const {
      db: { Logs }, 
      body: { userId, mood, abdominal_pain, backpain, nauseau, fatigue }, 
    } = req;
  
  
    const logs = await Logs.create( userId ,mood, abdominal_pain, backpain, nauseau, fatigue);
  
    res.send(logs);
  };
  
  module.exports = createLog;