const knex = require("../knex");
const { deleteAll } = require("./user");

class Pages {
  constructor({
    id,
    user_id,
    facility_doctor,
    specialty,
    description,
    address,
    is_facility,
    is_doctor,
    photo,
  }) {
    (this.id = id),
      (this.user_id = user_id),
      (this.facility_doctor = facility_doctor),
      (this.specialty = specialty),
      (this.description = description),
      (this.address = address),
      (this.is_facility = is_facility),
      (this.is_doctor = is_doctor),
      (this.photo = photo);
  }

  static async list() {
    const query = "SELECT * FROM pages";
    const { rows } = await knex.raw(query);
    console.log(rows);
    return rows.map((page) => new Pages(page));
  }

  static async find(id) {
    const query = "SELECT * FROM pages WHERE id = ?";
    const { rows } = await knex.raw(query, [id]);
    return page ? new Pages(page) : null;
  }

  static async findByPageFacility(facility_doctor) {
    const query = "SELECT FROM pages WHERE facility_doctor = ?";
    const {
      rows: [page],
    } = await knex.raw(query, [facility_doctor]);
    return page ? new Pages(page) : null;
  }

  static async create(
    user_id,
    facility_doctor,
    specialty,
    description,
    address,
    is_facility,
    is_doctor,
    photo
  ) {
    try {
      const query = `
      INSERT INTO pages (user_id, facility_doctor, specialty, description, address, is_facility, is_doctor, photo)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?) 
      RETURNING *`;
      const {
        rows: [page],
      } = await knex.raw(query, [
        user_id,
        facility_doctor,
        specialty,
        description,
        address,
        is_facility,
        is_doctor,
        photo
      ]);
      return new Pages(page);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE pages;");
  }

  update = async (description) => {
    // dynamic queries are easier if you add more properties
    const [updatedDescription] = await knex("pages")
      .where({ id: this.id })
      .update({ description })
      .returning("*");
    return updatedDescription ? new Pages(updatedDescription) : null;
  };
}

module.exports = Pages;
