const router = require("express").Router();
const upload = require("../../utils/upload");
const { Sheet } = require("../../model");

async function createSheet(req, res, sheetDetails) {
  console.log(req.file);
  console.log(req.session.loggedIn);

  try {
    if (req.file && req.session.loggedIn == true) {
      console.log(req.filename);
      const sheetCreated = await Sheet.create(sheetDetails, {
        Location: req.file.path.replace("public/", ""),
      });
      console.log(sheetCreated);
      if (sheetCreated) {
        res.status(201).json({
          message: ` Created for sheet: ${sheetDetails.title}`,
        });
      } else {
        res.status(500).json({
          message: `Creation failed for sheet id: ${sheetDetails.id}. We think its something to do with the database`,
        });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Sheet Creation failed for post: ${sheetDetails.id}. We think it is not the database but the database error may also appear.`,
    });
  }
}

router.post("/new", upload.single("upload"), async (req, res) => {
  console.log(req.upload);
  console.log("reached");
  if (!req.session.loggedIn) return;
  if (!req.session.user_id == req.body.user_id) return;

  const sheetDetails = {
    user_id: req.session.user_id,
    note: req.body.note,
  };
  try {
    await createSheet(req, res, sheetDetails);
  } catch (error) {
    console.log(error);
    res.json({ message: "an error occured", error: error });
  }
});

module.exports = router;
