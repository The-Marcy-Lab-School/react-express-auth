const knex = require('../knex');
class Items{
    constructor({id,name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score}){
        this.id = id;
        this.name = name;
        this.food_rating = food_rating;
        this.nutri_score_quality = nutri_score_quality;
        this.ingredients = ingredients;
        this.addivites = addivites;
        this.nova_score = nova_score;
        this.eco_score = eco_score ;    
    }
    //creating items for item list
    static async create(name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score) {
        const query = `INSERT INTO Items (name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score)
          VALUES (?,?,?,?,?,?,?) RETURNING *`;
        const { rows: [item] } = await knex.raw(query, [name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score]);
        return new Items(item);
      }
      //finding an item 
      static async find(id) {
        try {
          const query = 'SELECT * FROM Items WHERE id = ?';
          const { rows: [item] } = await knex.raw(query, [id]);
          return item ? new Items(item) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      //Updating information on an item
      static async update(name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score) {
        try {
          const [updatedItem] = await knex('Items')
            .where({ id: id })
            .update({ name: name,
                food_rating : food_rating,
                nutri_score_quality : nutri_score_quality,
                ingredients : ingredients,
                addivites : addivites,
                nova_score : nova_score,
                eco_score : eco_score })
            .returning('*');
            
          return updatedItem ? new Grocery_list(updatedItem) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      
    }
    //showing all items that have been created
    static async list () {
        try{
          const result = await knex.raw(`
          SELECT * FROM Items;
          `,[])
          return result.rows;
        }catch(err){
          console.log(err);
          return null;
        }
      }
      static async destroyAll() {
        const deleted = await knex.raw(' Items').del();
        return deleted;
      }


    //deleting/removing an item from list
      deleteItem = async (name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score) => {
        const deletedItem = await knex('Items')
          .where({ name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score })
          .del();
        
        return deletedItem > 0 ? "Items deleted successfully." : "No item deleted.";
      };


}
module.exports = Items;