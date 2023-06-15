const knex = require('../knex');
class Grocery_list{
    constructor({ id, nova_rate, nutri_score }) {
        this.id = id;
        this.nova_rate = nova_rate;
        this.nutri_score = nutri_score;
        
      }

      //adding items to grocery list 
      static async create(nova_rate, nutri_score) {
        const query = `INSERT INTO grocery_list (nova_rate, nutri_score)
          VALUES (?,?) RETURNING *`;
        const { rows: [rate] } = await knex.raw(query, [nova_rate, nutri_score]);
        return new Grocery_list(rate);
      }
       
      // updating the nova rate and nutri score 
      static async update (nova_rate,nutri_score){ 
        const [updatedRate] = await knex('grocery_list')
          .where({ nova_rate: this.nova_rate, nutri_score:this.nutri_score
        })
          .update({ nova_rate, nutri_score})
          .returning('*');  
        return updatedRate ? new Grocery_list(updatedRate) : null;
      };
      
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
      static async destroyAll() {
        // await knex.raw(`DELETE FROM comments WHERE post_id = ? RETURNING *;`,[ id ])
        // await knex.raw(`DELETE FROM likes WHERE post_id = ? RETURNING *;`,[ id ])
        // const deleted = await knex.raw(`DELETE FROM posts WHERE id = ? RETURNING *;`,[ id ])
        // return deleted.rowCount
        await knex.raw('DELETE FROM grocery_items_table;');
        await knex.raw('DELETE FROM user_groceries;');
        const deleted = await knex.raw('DELETE FROM grocery_list;');
        return deleted
      }
      //deleting/removing an item from list
         deleteRate = async (nova_rate, nutri_score) => {
        const deletedRate = await knex('grocery_list')
          .where({ nova_rate, nutri_score })
          .del();
        
        return deletedRate > 0 ? "Record deleted successfully." : "No records deleted.";
      };
      

}
module.exports = Grocery_list;