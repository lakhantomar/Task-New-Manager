const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

router.get("/", auth, (req, res) => {
  res.json({ message: "All projects" });
});

router.post("/", auth, (req, res) => {
  res.json({ message: "Project created" });
});

module.exports = router;
