const { Router } = require("express");
const router = Router();

router.get("/admin", (req, res) => {
  res.render("admin");
});

module.exports = router;