"use strict";
// index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("./utils/logger");
const idGenerator_1 = require("./utils/idGenerator");
const db_1 = require("./db/db");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
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
// Endpoint to create a table
app.post("/thoracle/create-table", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS logs (
      id SERIAL PRIMARY KEY,
      message VARCHAR(255),
      type VARCHAR(255),
      extra VARCHAR(255)
    )
  `;
    try {
        yield db_1.DB.query(createTableQuery);
        res.status(200).json({ message: "Table created successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create table", error });
    }
}));
// Endpoint to add a row to the table
app.post("/thoracle/add-row", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { column1, column2, column3 } = req.body;
    const insertRowQuery = `
    INSERT INTO logs (message, type, extra)
    VALUES ($1, $2, $3)
  `;
    try {
        yield db_1.DB.query(insertRowQuery, [column1, column2, column3]);
        res.status(200).json({ message: "Row added successfully!" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to add row", error });
    }
}));
// Endpoint to list all rows in the table
app.get("/thoracle/list-rows", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const selectAllRowsQuery = `SELECT * FROM logs`;
    try {
        const result = yield db_1.DB.query(selectAllRowsQuery);
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to list rows", error });
    }
}));
// Power of Attorney
app.get("/api/poa/ping", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Add log to DB here
        res.json({ message: "pong" });
    }
    catch (error) {
        // Add log to DB here
        (0, logger_1.consoleLog)(`${error} <--- error`, true);
    }
}));
app.post("/api/poa/create-checkout-session", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentSessionId = (0, idGenerator_1.getId)();
    // Add log to DB here
    const session = yield stripe.checkout.sessions.create({
        line_items: [
            {
                price: "price_1Orf6FAgrChdqWFrCVk4GF8M",
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `https://www.powerofattorney24.com/checkout?success=true&session_id=${paymentSessionId}`,
        cancel_url: `https://www.powerofattorney24.com/checkout?canceled=true&session_id=${paymentSessionId}`,
        automatic_tax: { enabled: true },
    });
    res.redirect(303, session.url);
}));
app.post("/api/poa/create-test-checkout-session", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentSessionId = (0, idGenerator_1.getId)();
    // Add log to DB here
    const session = yield stripe.checkout.sessions.create({
        line_items: [
            {
                price: "price_1Orf6wAgrChdqWFrKJ1uKVqO",
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `https://www.powerofattorney24.com/checkout?success=true&session_id=${paymentSessionId}`,
        cancel_url: `https://www.powerofattorney24.com/checkout?canceled=true&session_id=${paymentSessionId}`,
        automatic_tax: { enabled: true },
    });
    res.redirect(303, session.url);
}));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    (0, logger_1.consoleLog)(`Server is running on port ${process.env.PORT}`, true);
});
