const knex = require('../knex');
// const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Post{
    static async create(Description, img_url, Owner_id, Address, Category) {
        try {
            const query = "INSERT INTO Posts(?, ?, ?, ?, ?) VALUES (?, ?, ?, ?, ?) RETURNING * "
            const {rows: [Posts]} = await knex.raw(query, [Description, img_url, Owner_id, Address, Category])
            return Posts;
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    }
    static async list() {
        try { 
            const query = " SELECT * FROM Posts"
            const {rows: [Posts]} = await knex.raw(query) 
            return Posts;
        }
        catch(error) {
            console.log('ERROR!')
            return null;
        }
    }
    static async delete(id) {
        try {
            const query = "DELETE FROM Posts WHERE id=? RETURNING *;"
            const {rows: [Posts]} = await knex.raw(query, [id])
            return Posts;
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    }
    static async show(id) {
        try {
            const query = "SELECT * FROM Posts WHERE id=?;"
            const {rows: [Posts]} = await knex.raw(query, [id])
            return Posts;
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        }    
    }

}

module.exports = Post;