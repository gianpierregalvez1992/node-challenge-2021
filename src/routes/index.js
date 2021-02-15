const router = require("express").Router();
const videosRoute = require("../resources/videos/videos.router");
router.use("/videos", videosRoute);
module.exports.routes = router;
