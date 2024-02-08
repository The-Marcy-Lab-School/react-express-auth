const showThread = async (req, res) => {
    const {
      db: { Thread }, 
      params: { id }, 
    } = req;
  
    const thread = await Thread.find(id);
    if (!thread) return res.sendStatus(404);
  
    res.send(thread);
  };
  
  module.exports = showThread;
  