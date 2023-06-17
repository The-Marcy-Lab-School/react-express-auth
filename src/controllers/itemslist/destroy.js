const destroy = async (req, res) => {
    const {
      db: { Items },
      params: { id },
    } = req
    const result = await Items.destroy(id);
  
    res.sendStatus(result ? 204 : 404);
  };
  
  module.exports = destroy;
  // const {
  //   db: { Items },
  //   params: { id },
  //   body: { product_name,ecoscore_grade,ingredients_text,additives_original_tags,image_front_thumb_url,stores,nutriscore_grade,nova_group }
  // } = req;