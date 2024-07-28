import express from "express";
import path from "path";

import { consoleLog } from "./utils/logger";
import quizRoutes from "./feature/quiz/routes";
import dobotRoutes from "./feature/doBot/routes";
import hpRoutes from "./feature/hp/routes";

const cors = require("cors");
require("dotenv").config();

const app = express();
// Enable CORS
app.use(cors());
app.use(express.static(path.join(__dirname, "ui", "build")));

// To handle JSON payload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "GET request received!" });
});

// Use the quiz routes
app.use("/api", quizRoutes);

// Use the dobot routes
app.use("/api", dobotRoutes);

// Use the hp routes
app.use("/api", hpRoutes);

app.get("/api/ip", (req, res) => {
  // return service IP address
  res.json({ ipOut: req.headers["x-forwarded-for"], ipIn: req.ip });
});

// Serve HTML page for DB operations
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  consoleLog(`Server is running on port ${process.env.PORT}`, true);
});
