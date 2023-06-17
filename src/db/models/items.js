const knex = require('../knex');
class Items{
    constructor({id,product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group,product_id}){
        this.id = id;
        this.product_name = product_name;
        this.ecoscore_grade = ecoscore_grade;
        this.ingredients_text = ingredients_text;   
        this.additives_original_tags = additives_original_tags;
        this.image_front_thumb_url = image_front_thumb_url;
        this.stores = stores;
        this.nutriscore_grade = nutriscore_grade;
        this.nova_group = nova_group;
        this.product_id = product_id
    }
    //creating items for item list
    static async create(product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group,product_id) {
        const query = `INSERT INTO Items (product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group,product_id)
          VALUES (?,?,?,?,?,?,?,?,?) RETURNING *`;
        const { rows: [item] } = await knex.raw(query, [product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group,product_id]);
        return new Items(item);
      }
      //finding an item 
      static async find(id) {
        try {
          const query = 'SELECT * FROM items WHERE id = ?';
          const { rows: [item] } = await knex.raw(query, [id]);
          return item ? new Items(item) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      //Updating information on an item
      static async update(id,product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group,product_id) {
        try {
          const [updatedItem] = await knex('items')
            .where({ id: id })
            .update({ product_name: product_name,ecoscore_grade: ecoscore_grade,
              ingredients_text:ingredients_text,
              additives_original_tags: additives_original_tags,
              image_front_thumb_url:image_front_thumb_url,
              stores: stores,
              nutriscore_grade: nutriscore_grade,
              nova_group: nova_group,
              product_id: product_id })
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
      static async destroy(id) {
    try{
      await knex.raw(`DELETE FROM grocery_items_table WHERE item_id = ? RETURNING *;`,[ id ])
      const deleted = await knex.raw(`DELETE FROM items WHERE id = ? RETURNING *;`,[ id ])
      return deleted.rowCount
    }
    catch (err){
      console.log(err)
      return null;
    }
  }
      //   const deleted = await knex.raw('Items').del();
      //   return deleted;
      // }


    //deleting/removing an item from list
      // deleteItem = async (name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score) => {
      //   const deletedItem = await knex('Items')
      //     .where({ name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score })
      //     .del();
        
      //   return deletedItem > 0 ? "Items deleted successfully." : "No item deleted.";
      // };


}
module.exports = Items;