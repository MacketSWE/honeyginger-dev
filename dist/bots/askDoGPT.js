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
Object.defineProperty(exports, "__esModule", { value: true });
exports.askDoGPT = void 0;
const { openai } = require("../functions");
const { getGeneralInfoPrompts } = require("./prompts/generalInfoPrompts");
const { getMeetingBotPrompts } = require("./prompts/meetingBotPrompts");
const getPrompts = ({ city, category }) => {
    if (category === "info") {
        return getGeneralInfoPrompts();
    }
    if (category === "mötesrum") {
        return getMeetingBotPrompts(city);
    }
};
const askDoGPT = ({ query, history, city, category, }) => __awaiter(void 0, void 0, void 0, function* () {
    const model = "gpt-4-1106-preview";
    // console.log(`Asking GPT-4 for ${city} ${category}...`);
    const response = yield openai.createChatCompletion({
        model,
        messages: [
            ...getPrompts({ city, category }),
            ...history,
            {
                role: "user",
                content: query,
            },
        ],
        temperature: 0.3,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response;
});
exports.askDoGPT = askDoGPT;
