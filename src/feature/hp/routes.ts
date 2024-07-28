import express from "express";
import { openai } from "../quiz/quiz";

const router = express.Router();

router.use(express.json()); // Middleware to parse JSON request bodies

router.post("/hp/test", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: "No image URL provided" });
    }

    const call = await openai.chat.completions.create({
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
  } catch (error) {
    res.status(500).json({ message: "Failed to ask LLM", error });
  }
});

export default router;
