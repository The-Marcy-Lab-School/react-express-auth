const listLogs = async (req, res) => {
    const { 
      db: { Logs } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const logs = await Logs.list();
    res.send(logs);
  };
  
  module.exports = listLogs;
  