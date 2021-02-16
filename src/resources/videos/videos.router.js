const router = require("express").Router();
const videosController = require("./videos.controller");

router.post("/", videosController.store);
router.put("/:_id", videosController.update);
router.get("/users/:user", videosController.listByUser);
router.delete("/:_id", videosController.delete);

module.exports = router;
