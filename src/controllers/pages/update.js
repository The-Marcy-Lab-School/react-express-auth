const updatePage = async (req, res) => {
    const {
      db: { Pages },
      params: { id },
      body: { user_id,facility_doctor, specialty, description, address, overall_rating, is_facility, is_doctor, photo }
    } = req;

    const page = await Pages.find(id);
    if (!page) return res.sendStatus(404);
  
    const updatedPage = await review.update(user_id, facility_doctor, specialty, description, address, overall_rating, is_facility, is_doctor, photo);
    res.send(updatedPage);
    if(!updatePage) return res.sendStatus(404);
    res.send(updatedPage)
  };
  
module.exports = updatePage;