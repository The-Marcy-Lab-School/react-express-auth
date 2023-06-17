const updateItem = async (req, res) => {
    const {
      db: { Items },
      params: { id },
      body: { product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group }
    } = req;
  
   
    const item = await Items.find(id);
    if (!item) return res.sendStatus(404);
  
    const updatedItem = await Items.update(id,product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group);
    res.send(updatedItem);
  };
  
  module.exports = updateItem;