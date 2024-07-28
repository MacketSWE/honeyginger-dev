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
router.use(express_1.default.json());
const tasks = [
    {
        name: 29,
        content: [
            {
                type: "image_url",
                image_url: {
                    url: "https://raw.githubusercontent.com/MacketSWE/honeyginger-dev/main/src/feature/hp/assets/29.png",
                },
            },
            {
                type: "text",
                text: "Lös denna uppgift. Tänk steg för steg och redogör för ditt resonemang.",
            },
        ],
        answer: "A",
    },
    {
        name: 33,
        content: [
            {
                type: "image_url",
                image_url: {
                    url: "https://raw.githubusercontent.com/MacketSWE/honeyginger-dev/main/src/feature/hp/assets/33.png",
                },
            },
            {
                type: "text",
                text: "Lös denna uppgift. Tänk steg för steg och redogör för ditt resonemang.",
            },
        ],
        answer: "C",
    },
    {
        name: 34,
        content: [
            {
                type: "image_url",
                image_url: {
                    url: "https://raw.githubusercontent.com/MacketSWE/honeyginger-dev/main/src/feature/hp/assets/34.png",
                },
            },
            {
                type: "text",
                text: "Lös denna uppgift. Tänk steg för steg och redogör för ditt resonemang.",
            },
        ],
        answer: "A",
    },
    {
        name: 35,
        content: [
            {
                type: "image_url",
                image_url: {
                    url: "https://raw.githubusercontent.com/MacketSWE/honeyginger-dev/main/src/feature/hp/assets/35.png",
                },
            },
            {
                type: "text",
                text: "Lös denna uppgift. Tänk steg för steg och redogör för ditt resonemang.",
            },
        ],
        answer: "C",
    },
];
router.get("/hp/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const call = yield quiz_1.openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "Du är en högpresterande student med fantastisk förmåga för logik och matematik. Du svarar enbart med en json bestående av 'text' och 'svar'. Svar är alltid enbart en bokstav - rätt svarsalternativ",
                },
                {
                    role: "user",
                    content: tasks[0].content,
                },
            ],
        });
        res
            .status(200)
            .json(Object.assign({}, JSON.parse(call.choices[0].message.content || "")));
    }
    catch (error) {
        res.status(500).json({ message: "Failed to ask LLM", error });
    }
}));
exports.default = router;
