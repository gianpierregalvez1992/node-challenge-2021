const router = require("express").Router();
const VideoController = require("../Controllers/Video");

router.post("/", VideoController.create);
router.put("/:_id", VideoController.update);
router.delete("/:_id", VideoController.destroy);

module.exports = router;
