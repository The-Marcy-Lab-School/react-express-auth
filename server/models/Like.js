const knex = require('../db/knex');

class Like {
    static async addLike(post_id, user_id) {
        try {
            const SQL = `INSERT INTO likes (post_id, user_id) VALUES(?, ?) RETURNING *`;
            const { rows: [likeData] } = await knex.raw(SQL, [post_id, user_id]);
            return likeData;
        } catch (error) {
            throw new Error(`Unable to add like: ${error.message}`);
        }
    }

    static async removeLike(post_id, user_id) {
        try {
            const SQL = `DELETE FROM likes WHERE post_id = ? AND user_id = ? RETURNING *`;
            const { rows: [removedLikeData] } = await knex.raw(SQL, [post_id, user_id]);
            return removedLikeData;
        } catch (error) {
            throw new Error(`Unable to remove like: ${error.message}`);
        }
    }

    static async checkLike(post_id, user_id) {
        try {
            const checkSQL = `SELECT * FROM likes WHERE post_id = ? AND user_id = ?`;
            const { rows: [existingLike] } = await knex.raw(checkSQL, [post_id, user_id]);
            return existingLike
        } catch(error) {
            throw new Error(`Unable to find like: ${error.message}`)
        }
    }
}

module.exports = Like;
