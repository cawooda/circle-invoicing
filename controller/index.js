const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./postRoutes");
const dayjs = require("dayjs");



router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
