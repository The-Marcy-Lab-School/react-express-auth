const knex = require('../knex');
class Grocery_list{
    constructor({ id, nova_rate, nutri_score }) {
        this.id = id;
        this.nova_rate = nova_rate;
        this.nutri_score = nutri_score;
        
      }

      //adding items to grocery list 
      static async create(id, nova_rate, nutri_score) {
        const query = `INSERT INTO Grocery_list (id,nova_rate, nutri_score)
          VALUES (?, ?,?) RETURNING *`;
        const { rows: [rate] } = await knex.raw(query, [id,nova_rate, nutri_score]);
        return new Grocery_list(rate);
      }
       
      // updating the nova rate and nutri score 
      update = async (nova_rate,nutri_score) => { 
        const [updatedRate] = await knex('grocery_list')
          .where({ nova_rate: this.nova_rate, nutri_score:this.nutri_score
        })
          .update({ nova_rate, nutri_score})
          .returning('*');  
        return updatedRate ? new Grocery_list(updatedRate) : null;
      };
      

      //deleting all information/data
      static async deleteAll() {
        return knex.raw('TRUNCATE grocery_list;');
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