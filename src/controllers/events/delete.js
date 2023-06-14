const delete = async (id) => {
    // call the delete method of the PostedImages class and pass in the id
    const result = await Events.delete(id);
    // return a boolean indicating if the deletion was successful or not
    return result ? true : false;
  };
  
    module.exports = delete;