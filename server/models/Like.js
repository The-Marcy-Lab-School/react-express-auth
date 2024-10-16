const knex = require('../db/knex');

class Like {
    
    static async addLike(post_id, user_id) {
        const SQL = `INSERT INTO likes (post_id, user_id) VALUES(?, ?) RETURNING *`
        const { rows } = await knex.raw(SQL, [post_id, user_id])
        console.log(rows)
        return rows[0]
    }
}

module.exports = Like;
