const createJournalEntry = async (req, res) => {
    const {
      db: { JournalEntry }, 
      body: { content, date, user_id },
    } = req;
  
    const journalEntry = await JournalEntry.addJournalEntry(content, date, user_id );
  
    res.send(journalEntry);
  };
  
  module.exports = createJournalEntry;
  