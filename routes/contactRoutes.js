const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  // res.send("Get all contacts");
  res.status(200).json({ message: "Get all contacts" });
});

module.exports = router;
