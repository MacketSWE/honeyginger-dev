"use strict";
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
exports.consoleLog = void 0;
const express_1 = __importDefault(require("express"));
const askDoGPT_1 = require("./bots/askDoGPT");
const askFunctionCallingBot_1 = require("./bots/askFunctionCallingBot");
const officeRnD_1 = require("./officeRnD");
const router = express_1.default.Router();
const isDev = process.env.NODE_ENV === "development";
const consoleLog = (message, logInProd = false) => {
    if (isDev || logInProd) {
        console.log(message);
    }
};
exports.consoleLog = consoleLog;
router.get("/dobot/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ ipOut: "foo", ipIn: "bar" });
}));
router.post("/dobot", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city, category, query, history } = req.body;
        (0, exports.consoleLog)(`${category} <--- category`);
        const gptResponse = yield (0, askDoGPT_1.askDoGPT)({ city, category, query, history });
        const answer = gptResponse.data.choices[0].message.content;
        if (answer.includes("X-RUM-X")) {
            // console.log("Activating availability bot...");
            const availabilityResponse = yield (0, askFunctionCallingBot_1.askAvailabilityCheckerBot)({
                city,
                answer,
            });
            try {
                (0, exports.consoleLog)(`${availabilityResponse.data.choices[0]}. <-- Bot generated JSON`);
                const json = JSON.parse(availabilityResponse.data.choices[0].message.content);
                (0, exports.consoleLog)("Checking available rooms...");
                const rooms = yield (0, officeRnD_1.getAvailability)(json.id, json.start, json.end);
                (0, exports.consoleLog)(`Got available rooms: ${rooms}`);
                res.json({
                    message: encodeURIComponent(`X-LEDIGA-RUM-X, information om rum denna tid: ${JSON.stringify(rooms, null, 2)}`),
                    data: req.body,
                });
            }
            catch (error) {
                (0, exports.consoleLog)(`${error} <--- error`);
            }
        }
        else if ((0, officeRnD_1.gotAllBookingData)(answer)) {
            // Handle booking completed
            (0, officeRnD_1.handleBookMeetingRoom)({ res, city, history, req });
        }
        else {
            res.json({ message: encodeURIComponent(answer), data: req.body });
        }
    }
    catch (error) {
        console.log(`${error} <--- error`);
    }
}));
exports.default = router;
