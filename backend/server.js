const express = require("express");
const cors = require("cors");
require("dotenv").config();
const itunesRoutes = require("./routes/itunes");
const authRoutes = require("./routes/authRoute");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Use the iTunes routes
app.use("/", itunesRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
