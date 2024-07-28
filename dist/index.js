"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("./utils/logger");
const routes_1 = __importDefault(require("./feature/quiz/routes"));
const routes_2 = __importDefault(require("./feature/doBot/routes"));
const routes_3 = __importDefault(require("./feature/hp/routes"));
const cors = require("cors");
require("dotenv").config();
const app = (0, express_1.default)();
// Enable CORS
app.use(cors());
app.use(express_1.default.static(path_1.default.join(__dirname, "ui", "build")));
// To handle JSON payload
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/api", (req, res) => {
    res.json({ message: "GET request received!" });
});
// Use the quiz routes
app.use("/api", routes_1.default);
// Use the dobot routes
app.use("/api", routes_2.default);
// Use the hp routes
app.use("/api", routes_3.default);
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
    (0, logger_1.consoleLog)(`Server is running on port ${process.env.PORT}`, true);
});
