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
router.use(express_1.default.json()); // Middleware to parse JSON request bodies
router.post("/hp/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imageUrl } = req.body;
        if (!imageUrl) {
            return res.status(400).json({ message: "No image URL provided" });
        }
        const call = yield quiz_1.openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: "What’s in this image?",
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                            },
                        },
                    ],
                },
            ],
        });
        console.log(call.choices[0].message.content, "<--- answer");
        res.status(200).json({ message: "" });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to ask LLM", error });
    }
}));
exports.default = router;
