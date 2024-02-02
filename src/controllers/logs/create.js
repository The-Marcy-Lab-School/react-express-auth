const createLog = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Logs }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { userId, mood, abdominal_pain, backpain, nauseau, fatigue }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const logs = await Logs.create( userId ,mood, abdominal_pain, backpain, nauseau, fatigue);
  
    res.send(logs);
  };
  
  module.exports = createLog;