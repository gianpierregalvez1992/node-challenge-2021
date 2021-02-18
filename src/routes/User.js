const router = require("express").Router();
const VideoController = require("../Controllers/Video");
const FavoriteVideoController = require("../Controllers/FavoriteVideo");

router.get("/:user/videos", VideoController.listByUser);
router.post("/:user/videos/favorite", FavoriteVideoController.create);
router.get("/:user/videos/favorite", FavoriteVideoController.listByUser);
router.delete("/:user/videos/favorite/:_id", FavoriteVideoController.destroy);

module.exports = router;
