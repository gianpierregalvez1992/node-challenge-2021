const router = require("express").Router();
const videosRoute = require("./Video");
const usersRoute = require("./USer");

router.use("/videos", videosRoute);
router.use("/users", usersRoute);

module.exports.routes = router;
