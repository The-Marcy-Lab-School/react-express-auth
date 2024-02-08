const listThreads = async (req, res) => {
    const { 
      db: { Thread } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const threads = await Thread.list();
    res.send(threads);
  };
  
  module.exports = listThreads;
  