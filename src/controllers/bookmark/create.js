const createBookmark = async (req, res) => {
    const {
        db: { Bookmarks },
        body: {
            user_id,
            page_id,
        },
    } = req;

    const bookmark = await Bookmarks.create(
        user_id,
        page_id
    );
    res.send(bookmark)
};
module.exports = createBookmark;