import express from "express";
import { askLLM } from "../quiz/quiz";

const router = express.Router();

router.post("/mbizz", async (req, res) => {
  try {
    const { messages } = req.body;
    let answer = await askLLM(messages, "gpt-4o-mini");
    res.status(200).json({ message: answer });
  } catch (error) {
    res.status(500).json({ message: "Failed to ask LLM", error });
  }
});

export default router;
