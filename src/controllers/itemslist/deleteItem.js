const deleteItem = async (req, res) => {
    const {
      db: { Items },
      params: { id },
      body: { product_name, ecoscore_grade, ingredients_text, additives_original_tags, image_front_thumb_url, stores, nutriscore_grade, nova_group }
    } = req;
  
    const item = await Items.findById(id);
    if (!item) return res.sendStatus(404);
  
    const deletedItem = await Items.deleteById(id);
    res.send("Item deleted successfully.");
  };
  
  module.exports = deleteItem;
  