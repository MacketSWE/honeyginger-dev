"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleLog = void 0;
const isDev = process.env.NODE_ENV === "development";
const consoleLog = (message, logInProd = false) => {
    if (isDev || logInProd) {
        console.log(message);
    }
};
exports.consoleLog = consoleLog;
