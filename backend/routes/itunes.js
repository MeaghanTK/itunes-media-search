const express = require("express");
const axios = require("axios");
const verifyToken = require("../middleware/auth");
const router = express.Router();

// Search route (protected)
router.get("/search", verifyToken, async (req, res) => {
  const { term, media } = req.query;

  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: { term, media },
    });
    res.json(response.data.results);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
