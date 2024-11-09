const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("register a user");
});

router.post("/login", (req, res) => {
  res.send("login a user");
});

router.post("/current", (req, res) => {
  res.send("get current user");
});
