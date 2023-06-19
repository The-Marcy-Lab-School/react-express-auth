const updatePage = async (req, res) => {
    const {
      db: { Pages },
      params: { id },
      body: { facility_doctor, specialty, description, address, overall_rating, isFacility, isDoctor, photo }
    } = req;

    const page = await Pages.find(id);
    if (!page) return res.sendStatus(404);
  
    const updatedPage = await review.update(facility_doctor, specialty, description, address, overall_rating, isFacility, isDoctor, photo);
    res.send(updatedPage);
    if(!updatePage) return res.sendStatus(404);
    res.send(updatedPage)
  };
  
module.exports = updatePage;