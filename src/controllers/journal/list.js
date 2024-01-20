const listJournalEntries = async (req, res) => {
    const { 
      db: { JournalEntry } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const journalEntries = await JournalEntry.getAllJournalEntries();
    res.send(journalEntries);
  };
  
  module.exports = listJournalEntries;