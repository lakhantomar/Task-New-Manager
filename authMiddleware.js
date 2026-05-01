const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

router.get("/", auth, (req, res) => {
  res.json({ message: "All tasks" });
});

router.post("/", auth, (req, res) => {
  res.json({ message: "Task created" });
});

module.exports = router;
