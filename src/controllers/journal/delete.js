const deletejournalEntry = async (req, res) => {
    const { 
      db: { JournalEntry } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const deletejournalEntry = await JournalEntry.delete();
    res.send(deletejournalEntry);
  };
  
  module.exports = deletejournalEntry