const deleteOneLike = async (req, res) => {

    const {
        db: { Like },
        params: { id }
    } = req

    const existingLike = await Like.find(id);
    if (!existingLike) return res.status(404).json({error: 'Like not found'});

    const deletedLike = await Like.deleteLike(id);
    deletedLike ? res.status(204).json({ message: 'Successfully deleted Like.' }) : res.sendStatus(500);

}

module.exports = deleteOneLike;