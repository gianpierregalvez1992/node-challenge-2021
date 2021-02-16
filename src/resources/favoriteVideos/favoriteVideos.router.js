const router = require("express").Router();
const favoriteVideosController = require("./favoriteVideos.controller");

router.post("/", favoriteVideosController.store);
router.get("/users/:user", favoriteVideosController.listByUser);
router.delete("/:_id", favoriteVideosController.delete);

module.exports = router;
