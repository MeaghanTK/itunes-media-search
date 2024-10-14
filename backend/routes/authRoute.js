const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

// Simulated login route to generate a token
router.post("/login", (req, res) => {
  // In a real app, you would validate username and password here
  const { username } = req.body;

  // Generate a token with a payload and expiration
  const token = jwt.sign({ id: username }, process.env.JWT_SECRET, {
    expiresIn: 86400, // expires in 24 hours
  });

  return res.json({ auth: true, token });
});

module.exports = router;
