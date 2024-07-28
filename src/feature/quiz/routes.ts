import express from "express";
import { askLLM } from "./quiz";
import { getRandom10Questions } from "./data/allQuestions";

const router = express.Router();

function encrypt(text: string, shift = 3) {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      return char; // Non-alphabetical characters are not changed
    })
    .join("");
}

router.post("/quiz", async (req, res) => {
  try {
    const { model, messages } = req.body;
    let answer = await askLLM(messages, model);
    res.status(200).json({ message: answer });
  } catch (error) {
    res.status(500).json({ message: "Failed to ask LLM", error });
  }
});

router.post("/quiz/get-ten", async (req, res) => {
  try {
    const { dupl, theme } = req.body;
    let answer = getRandom10Questions(dupl, theme);
    let encryptedAnswer = encrypt(JSON.stringify(answer));

    const randomPause = Math.floor(Math.random() * 2000);
    await new Promise((resolve) => setTimeout(resolve, randomPause));

    res.status(200).json({ message: encryptedAnswer });
  } catch (error) {
    res.status(500).json({ message: "Failed to get questions", error });
  }
});

export default router;
