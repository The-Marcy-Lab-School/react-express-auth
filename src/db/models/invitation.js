const knex = require('../knex');

class Invitation {
 
  static async list(id) {
    const query = 'SELECT * FROM invitations WHERE receiver_id = ?';
    const { rows } = await knex.raw(query, [id]);
    return rows;
  }

  static async find(id) {
    const query = 'SELECT * FROM invitations WHERE id = ?';
    const { rows: [invitation] } = await knex.raw(query, [id]);
    return invitation ? invitation : null;
  }

  static async create(senderId, receiverId, susuId){
    try{
      const { rows } = await knex.raw("INSERT INTO invitations (sender_id, receiver_id, susu_id) VALUES (?,?,?) RETURNING *", [senderId, receiverId, susuId]);
      return rows[0];
    }
    catch(error){
      console.log(error);
      return null
    }
  }

  static async handleInvite(id){
    try{
        const foundInvite = await Invitation.find(id)
        if(!foundInvite) return null;
        // await knex.raw('DELETE FROM susu WHERE susu.id = ?', [id])
        const deletedInvite =  await knex.raw('DELETE FROM invitations WHERE id = ? RETURNING *', [id])
        return deletedInvite.rows[0]
    }
    catch(error){
        console.log(error);
        return null
    }
}
}

module.exports = Invitation;