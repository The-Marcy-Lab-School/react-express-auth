const createPages = async (req, res) => {
    const {
        db: { Pages },
        body: { facility_doctor, specialty, description, address, overall_rating, isFacility, isDoctor, photo },
    } = req;

    const page = await Pages.create(facility_doctor, specialty, description, address, overall_rating, isFacility, isDoctor, photo);
    res.send(page);
}

module.exports = createPages;