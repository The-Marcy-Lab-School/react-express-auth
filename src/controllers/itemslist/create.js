const Items = require("../../db/models/items");

const createItems = async (req, res) => {
    const {
      db: { Items },
      body: { name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score },
    } = req;
  
    const item = await Items.create( name,food_rating,nutri_score_quality,ingredients,addivites,nova_score,eco_score);
    
    res.send( item );
  };
  
  module.exports = createItems;