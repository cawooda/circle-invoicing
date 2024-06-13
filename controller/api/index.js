const router = require("express").Router();
const registeredUserRoute = require("./userRoute");
const sheetRoutes = require("./sheetRoutes");

router.use("/users", registeredUserRoute);
router.use("/sheets", sheetRoutes);

router.get("/", (req, res) => {
  console.log("api reached");
  req.send("api reached");
});

module.exports = router;
