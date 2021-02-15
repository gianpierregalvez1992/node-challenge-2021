const router = require("express").Router();
const videosRoute = require("./src/resources/videos/videos.router");

router.use("/videos", videosRoute);
module.exports.router = router;
