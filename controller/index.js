const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const postRoutes = require("./postRoutes");
const dayjs = require("dayjs");

const demoTickers = require("./demoTicker.json");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
