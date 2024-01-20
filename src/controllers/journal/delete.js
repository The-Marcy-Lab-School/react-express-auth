const deletedjournalEntry = async (req, res) => {
    const { 
      db: { JournalEntry } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const deletedjournalEntry = await JournalEntry.delete();
    res.send(deletedjournalEntry);
  };
  
  module.exports = deletedjournalEntry