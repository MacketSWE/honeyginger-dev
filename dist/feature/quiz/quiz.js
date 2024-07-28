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
exports.askLLama3 = exports.askChatGPT = exports.askLLM = exports.openai = void 0;
require("dotenv").config();
const openai_1 = __importDefault(require("openai"));
exports.openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-20sgSWfhxJTx0Hz3NagXlYqK",
});
const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});
const askLLM = (messages, model) => __awaiter(void 0, void 0, void 0, function* () {
    let res = "No answer";
    if (model.includes("llama3")) {
        res = yield askLLama3(messages, model);
    }
    else {
        res = yield askChatGPT(messages, model);
    }
    return res;
});
exports.askLLM = askLLM;
function askChatGPT(messages_1, model_1) {
    return __awaiter(this, arguments, void 0, function* (messages, model, temperature = 1) {
        const completion = yield exports.openai.chat.completions.create({
            messages: messages,
            model,
            temperature,
        });
        return completion;
    });
}
exports.askChatGPT = askChatGPT;
function askLLama3(messages_1, model_1) {
    return __awaiter(this, arguments, void 0, function* (messages, model, temperature = 1) {
        const completion = groq.chat.completions.create({
            messages,
            model,
            temperature,
        });
        return completion;
    });
}
exports.askLLama3 = askLLama3;
