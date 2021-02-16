const router = require("express").Router();
const videosRoute = require("../resources/videos/videos.router");
const favoriteVideosRoute = require("../resources/favoriteVideos/favoriteVideos.router");
router.use("/videos", videosRoute);
router.use("/favoriteVideos", favoriteVideosRoute);
module.exports.routes = router;
