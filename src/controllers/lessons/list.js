const listLessons = async (req, res) => {
    const { 
      db: { Lessons } // this req.db.User property is put here by the addModelsToRequest middleware
    } = req; 
  
    const listLesson = await Lessons.list();
    console.log("quiz list" + listLessons)
    res.send(quizzes);
  };
  
  module.exports = listLessons;
  