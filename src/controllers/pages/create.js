const createPages = async (req, res) => {
  const {
    db: { Pages },
    body: {
      user_id,
      facility_doctor,
      specialty,
      description,
      address,
      overall_rating,
      is_facility,
      is_doctor,
      photo,
    },
  } = req;


  const page = await Pages.create(
    user_id,
    facility_doctor,
    specialty,
    description,
    address,
    overall_rating,
    is_facility,
    is_doctor,
    photo
  );
  res.send(page);
};

module.exports = createPages;
