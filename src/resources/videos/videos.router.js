const router = require("express").Router();
const videosController = require("./videos.controller");

router.post("/store", videosController.store);
router.post("/update", videosController.update);
router.post("/listByUser", videosController.listByUser);
router.post("/delete", videosController.delete);

module.exports = router;
