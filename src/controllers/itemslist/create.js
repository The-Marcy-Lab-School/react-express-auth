const Items = require("../../db/models/items");

const createItems = async (req, res) => {
    const {
      db: { Items },
      body: { id,product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group},
    } = req;
  
    const item = await Items.create( id,product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group);
    
    res.send( item );
  };
  
  module.exports = createItems;