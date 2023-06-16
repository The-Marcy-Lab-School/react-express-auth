const updateItem = async (req, res) => {
    const {
      db: { Items },
      params: { id },
      body: { name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score }
    } = req;
  
   
    const item = await Items.find(id);
    if (!item) return res.sendStatus(404);
  
    const updatedItem = await Items.update(id,name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score);
    res.send(updatedItem);
  };
  
  module.exports = updateItem;