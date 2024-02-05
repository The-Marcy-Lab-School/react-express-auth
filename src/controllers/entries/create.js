const createEntry = async (req, res) => {
    const {
      db: { Entry }, 
      body: { user_id, log_id }, 
    } = req;
  
  
    const entry = await Entry.create( user_id, log_id);
  
    res.send(entry);
  };
  
  module.exports = createEntry;