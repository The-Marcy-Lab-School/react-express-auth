const updatePage = async (req, res) => {
    const {
      db: { Page },
      body: {  content, page_id, user_id },
    } = req;
  
    const page = await Page.update( content, page_id, user_id);
    console.log('update yo');
  
    page
      ? res.status(201).send(page)
      : res.status(500).send({ err: "Can't update" });
  };
  
  module.exports = updatePage;