const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const dbConfig = require("./config/database.config");
const userRoutes = require("./app/routes/User");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Assignment 3b CRUD API is running" });
});

app.use("/user", userRoutes);

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });
