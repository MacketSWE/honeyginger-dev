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
const quiz_1 = require("../quiz/quiz");
const router = express_1.default.Router();
router.post("/mbizz", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { messages } = req.body;
        let answer = yield (0, quiz_1.askLLM)(messages, "gpt-4o-mini");
        res.status(200).json({ message: answer });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to ask LLM", error });
    }
}));
exports.default = router;
