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
exports.askEmailBot = exports.askAvailabilityCheckerBot = exports.askFunctionCallingBot = void 0;
const functions_1 = require("../functions");
const meetingFunctionCallingPrompts_1 = require("./prompts/meetingFunctionCallingPrompts");
const askFunctionCallingBot = (_a) => __awaiter(void 0, [_a], void 0, function* ({ city, query, }) {
    const response = yield functions_1.openai.createChatCompletion({
        model: "gpt-4",
        messages: [...(0, meetingFunctionCallingPrompts_1.getFunctionCallingPrompt)({ city, query })],
        temperature: 0.3,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response;
});
exports.askFunctionCallingBot = askFunctionCallingBot;
const askAvailabilityCheckerBot = (_b) => __awaiter(void 0, [_b], void 0, function* ({ city, answer, }) {
    const response = yield functions_1.openai.createChatCompletion({
        model: "gpt-4",
        messages: [...(0, meetingFunctionCallingPrompts_1.getAvailabilityCheckerPrompt)({ city, answer })],
        temperature: 0.1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response;
});
exports.askAvailabilityCheckerBot = askAvailabilityCheckerBot;
const askEmailBot = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield functions_1.openai.createChatCompletion({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: `Du är expert på att utläsa e-postadresser från text. Du ska svara med en e-postadress som du hittar i texten, som INTE är adressen för faktura. Du ska utläsa e-post-adressen som ska skickas som bekräftelse och enbart svara den. Om du inte hittar någon e-postadress ska du svara "X-FEL-X". Du svarar annars ENBART med e-postadressen.`,
            },
            {
                role: "user",
                content: "E-post för bokningsbekräftelse: mthorelius@gmail.com, Faktura skickas till: mthorelius@gmail.com",
            },
            {
                role: "assistant",
                content: "mthorelius@gmail.com",
            },
            {
                role: "user",
                content: "malle@test.com på båda",
            },
            {
                role: "assistant",
                content: "malle@test.com",
            },
            {
                role: "user",
                content: "E-post: anna@gmail.com. Faktura: nils@gmail.com",
            },
            {
                role: "assistant",
                content: "anna@gmail.com",
            },
            {
                role: "user",
                content: query,
            },
        ],
        temperature: 0.1,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.data.choices[0].message.content;
});
exports.askEmailBot = askEmailBot;
