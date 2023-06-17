const knex = require('../knex');
class Grocery_list{
    constructor({ id, nova_rate, nutri_score }) {
        this.id = id;
        this.nova_rate = nova_rate;
        this.nutri_score = nutri_score;
        
      }

      //adding items to grocery list 
      static async create(nova_rate, nutri_score) {
        try{
        const query = `INSERT INTO grocery_list (nova_rate, nutri_score)
          VALUES (?,?) RETURNING *`;
        const { rows: [rate] } = await knex.raw(query, [nova_rate, nutri_score]);
        return new Grocery_list(rate);
      } catch (err) {
        console.error(err);
        return null;
      }
    }
      static async find(id) {
        try {
          const query = 'SELECT * FROM grocery_list WHERE id = ?';
          const { rows: [grocery_list] } = await knex.raw(query, [id]);
          return grocery_list ? new Grocery_list(grocery_list) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }
      // updating the nova rate and nutri score 
      static async update(id, nova_rate, nutri_score) {
        try {
          const [updatedRate] = await knex('grocery_list')
            .where({ id: id })
            .update({ nova_rate: nova_rate, nutri_score: nutri_score })
            .returning('*');
            
          return updatedRate ? new Grocery_list(updatedRate) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }      
      
      static async list () {
        try{
          const result = await knex.raw(`
          SELECT * FROM grocery_list;
          `,[])
          return result.rows;
        }catch(err){
          console.log(err);
          return null;
        }
      }
      //deleting all information/data
      static async destroy(id) {
        try{
          await knex.raw(`DELETE FROM grocery_items_table WHERE grocery_list_id = ? RETURNING *;`,[ id ])
          await knex.raw(`DELETE FROM user_groceries WHERE grocery_list_id = ? RETURNING *;`,[ id ])
          const deleted = await knex.raw(`DELETE FROM grocery_list WHERE id = ? RETURNING *;`,[ id ])
          return deleted.rowCount
        }
        catch (err){
          console.log(err)
          return null;
        }
      }
      // static async destroyAll() {
      //   await knex.raw('DELETE FROM grocery_items_table;');
      //   await knex.raw('DELETE FROM user_groceries;');
      //   const deleted = await knex.raw('DELETE FROM grocery_list;');
      //   return deleted
      // }
      //deleting/removing an item from list
         deleteRate = async (nova_rate, nutri_score) => {
        const deletedRate = await knex('grocery_list')
          .where({ nova_rate, nutri_score })
          .del();
        
        return deletedRate > 0 ? "Rates deleted successfully." : "No rates deleted.";
      };
      

}
module.exports = Grocery_list;