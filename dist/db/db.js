"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
// db.ts
const pg_1 = require("pg");
require("dotenv").config();
exports.DB = new pg_1.Pool({
    user: "thoracle1",
    host: "35.228.133.55",
    database: "thoracledb",
    password: process.env.DB_PASSWORD,
    port: 5432,
});
