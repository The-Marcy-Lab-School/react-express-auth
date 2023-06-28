const deleteBookmark = async (req, res) => {
    const {
        db: {Bookmarks},
        params: { id } } = req;
        const result = await Bookmark.delete(Number(id));
        res.status(result ? 204 : 404).send(result);
    };
module.exports = deleteBookmark