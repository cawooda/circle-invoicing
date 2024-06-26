const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dayjs = require("dayjs");



router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
