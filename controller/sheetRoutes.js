const router = require("express").Router();
const upload = require("../utils/upload");
const { Sheet } = require("../model");
const { siteTitle, termsAddress } = require("../config/siteInfo");

router.get("/", async (req, res) => {
  try {
    const sheetData = await Sheet.findAll({
      include: { all: true, nested: true },
    });

    const sheets = await sheetData.map((sheet) => sheet.get({ plain: true }));
    res.render("sheets", {
      sheets,
      siteTitle,
      testData: req.session.testing ? req.session.testData : false,
      loggedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      pageTitle: "Home Page",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/new", async (req, res) => {
  if (req.session.loggedIn) {
    res.render("new-sheet", {
      siteTitle: siteTitle,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
      loggedOut: !req.session.loggedIn,
      pageTitle: "New Sheet",
    });
  } else res.redirect("/login");
});

module.exports = router;
