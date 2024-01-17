const knex = require('../knex');

class Moods {
    static async getAllMoods() {
        try {
            const query = 'SELECT * FROM users JOIN moods ON users.id = moods.user_id';
            // const query = 'SELECT * FROM moods';
            const { rows } = await knex.raw(query);
            return rows;
        } catch (err) {
        console.log(err);
        return null
    }
}

    static async getMoodById(id) {
        try {
            const query = 'SELECT * FROM users JOIN moods ON users.id = moods.user_id WHERE users.id = ?';
            const { rows } = await knex.raw(query, [id]);
            return rows;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    static async addMood(mood, user_id) {
        try {
            const query = 'INSERT INTO moods (mood, user_id) VALUES (?, ?)';
            const { rows } = await knex.raw(query, [mood, user_id]);
            return rows;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    static async deleteMood(id) {
        try {
            const query = 'DELETE FROM moods WHERE id = ?';
            const { rows } = await knex.raw(query, [id]);
            return rows;
        } catch (err) {
            console.log(err);
            return null
        }
    }
}

module.exports = Moods;