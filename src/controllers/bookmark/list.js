const listBookmark = async (req, res) => {
    const { Bookmarks } = req.db;
    const bookmark = await Bookmarks.list();
    res.send(bookmark)
};

module.exports = listBookmark;