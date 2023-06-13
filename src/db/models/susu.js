const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Susu{
    constructor({id, name, password_hash, owner, payment_amount, next_payment}){
        this.id = id;
        this.name = name;
        this.password_hash = password_hash;
        this.owner = owner;
        this.payment_amount = payment_amount;
        this.next_payment = next_payment
    }
    static async show(id){
        try{
            const findSusu = await knex.raw('SELECT * FROM susu WHERE id =?', [id]);
            if(!findSusu){
                return null;
            }
            return new Susu(findSusu.rows[0]);
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async list(user_id){
        try{
            const {rows} = await knex.raw('SELECT * from Susu WHERE susu.id= ')

            return rows.map((post) => new Posts(post));
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async create(name, password_hash, owner, payment_amount, next_payment){
        try{
            const susu = await knex.raw('INSERT INTO susu (name, password_hash, owner, payment_amount, next_payment) VALUES(?,?,?,?,?) RETURNING *',[name, password_hash, owner, payment_amount, next_payment])
            return new Susu(susu.rows[0])
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async update(id, name, password_hash, owner, payment_amount, next_payment){
        try{
            let updatateSusu = await knex.raw('UPDATE susu SET name = ?, password_hash=?, owner=?, payment_amount=?, next_payment=?  WHERE susu.id = ?', [name, password_hash, owner, payment_amount, next_payment, id])
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async destroy(id){
        try{
            const foundSusu = await Susu.find(id)
            if(!foundSusu) return null;
            await knex.raw('DELETE FROM susu WHERE susu.id = ?', [id])
            const deletedpost =  await knex.raw('DELETE FROM posts WHERE id= ? RETURNING *', [id])
            return deletedpost.rows[0]
        }
        catch(error){
            console.log(error);
            return null
        }
    }
}

module.exports = Susu;