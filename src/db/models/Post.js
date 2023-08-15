const knex = require('../knex');
// const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Post{
    static async create(Description, img_url, Owner_id, Address, Category) {
        try {
            
        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    }
    static async list() {
        try {

        }
        catch(error) {
            console.log('ERROR!')
            return null;
        }
    }
    static async delete() {
        try {

        }
        catch(error) {
            console.log('ERROR!') 
            return null;
        } 
    }

}

module.exports = Post;