const showBookmark = async (req, res) => {
    const {
        db: { Bookmarks },
        params: { id },
    } = req;
    const bookmark = await Bookmarks.find(id);
    if (!bookmark) return res.sendStatus(404);

    res.send(bookmark);
};
module.exports = showBookmark;