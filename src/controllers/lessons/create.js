const createLessons = async (req, res) => {
    const {
        
      //session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Lessons }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { lessons, quiz_id, level_id }, // this req.body property is put here by the client
    } = req;
    // TODO: check if username is taken, what should you return?
    const lesson = await Lessons.create(lessons, quiz_id, level_id);
    // session.userId = user.id;
    console.log("quiz questionr" + lesson)
    //res.send(questions);
  };
  
  module.exports = createLessons;
  