const knex = require('../knex');
// const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Like{
    static async create(user_id, post_id) {
        try {
            const query = "INSERT INTO Likes (user_id, owner_id) VALUES(?,?)"
            const {rows: [Likes]} = await knex.raw(query,[])
            return Likes
            
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    } 
    static async delete(id) {
        try {
            const query = "DELETE FROM Likes WHERE id=?"
            const {rows: [Likes]} = await knex.raw(query,[id])
            return Likes
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    } 

    static async list(id) {
        try {
            const query = "SELECT * FROM Likes ORDER BY id DESC"
            const {rows: [Likes]} = await knex.raw(query,[id])
            return Likes
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    } 

}

module.exports = Like;