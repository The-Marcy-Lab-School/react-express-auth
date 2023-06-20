const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class Susu{

    static async show(id){
        try{
            const { rows }= await knex.raw('SELECT * FROM susu WHERE id =?', [id]);
            if (!rows) return null 
            return rows[0]
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async list(user_id){
        try{
            const {rows} = await knex.raw('SELECT * from susu JOIN users_susu ON susu.id = users_susu.susu_id WHERE user_id = ?',[user_id])

            return rows
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async create(name, password_hash, owner, payment_amount, next_payment){//possibly need id
        console.log({name, password_hash, owner, payment_amount, next_payment})
         const passwordHash = await hashPassword(password_hash);
        try{
            const { rows } = await knex.raw(
							"INSERT INTO susu (name, password_hash, owner, payment_amount, next_payment) VALUES(?,?,?,?,?) RETURNING *",
							[name, passwordHash, owner, payment_amount, next_payment]
						);
            return rows[0]
        }
        catch(error){
            console.log(error);
            return null
        }
    }
    static async add(user_id, susu_id, make_payments){//possibly need id
        // const passwordHash = await hashPassword(password_hash);
       try{
           const susu = await knex.raw(
                           "INSERT INTO users_susu (user_id, susu_id, make_payments) VALUES(?,?,?) RETURNING *",
                           [user_id, susu_id, make_payments]
                       );
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
    static async all(){
        try{
            let {rows} = await knex.raw('SELECT * from susu')
            return rows 
        }
        catch(error){
            console.log(error)
            return null
        }
        
    }
    static async destroy(id){
        try{
            const foundSusu = await Susu.show(id)
            if(!foundSusu) return null;
            // await knex.raw('DELETE FROM susu WHERE susu.id = ?', [id])
            const deletedpost =  await knex.raw('DELETE FROM susu WHERE id= ? RETURNING *', [id])
            return deletedpost.rows[0]
        }
        catch(error){
            console.log(error);
            return null
        }
    }
}

module.exports = Susu;