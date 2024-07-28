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
const express_1 = __importDefault(require("express"));
const quiz_1 = require("./quiz");
const allQuestions_1 = require("./data/allQuestions");
const router = express_1.default.Router();
function encrypt(text, shift = 3) {
    return text
        .split("")
        .map((char) => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        return char; // Non-alphabetical characters are not changed
    })
        .join("");
}
router.post("/quiz", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { model, messages } = req.body;
        let answer = yield (0, quiz_1.askLLM)(messages, model);
        res.status(200).json({ message: answer });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to ask LLM", error });
    }
}));
router.post("/quiz/get-ten", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dupl, theme } = req.body;
        let answer = (0, allQuestions_1.getRandom10Questions)(dupl, theme);
        let encryptedAnswer = encrypt(JSON.stringify(answer));
        const randomPause = Math.floor(Math.random() * 2000);
        yield new Promise((resolve) => setTimeout(resolve, randomPause));
        res.status(200).json({ message: encryptedAnswer });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to get questions", error });
    }
}));
exports.default = router;
