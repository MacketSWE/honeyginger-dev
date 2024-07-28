import express from "express";
import { openai } from "../quiz/quiz";
import { ChatCompletionContentPart } from "openai/resources";

const router = express.Router();

router.use(express.json());

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
    ] as ChatCompletionContentPart[],
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
    ] as ChatCompletionContentPart[],
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
    ] as ChatCompletionContentPart[],
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
    ] as ChatCompletionContentPart[],
    answer: "C",
  },
];

router.get("/hp/test", async (req, res) => {
  try {
    const call = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "Du är en högpresterande student med fantastisk förmåga för logik och matematik. Du svarar enbart med en json bestående av 'text' och 'svar'. Svar är alltid enbart en bokstav - rätt svarsalternativ",
        },
        {
          role: "user",
          content: tasks[0].content,
        },
      ],
    });

    res
      .status(200)
      .json({ ...JSON.parse(call.choices[0].message.content || "") });
  } catch (error) {
    res.status(500).json({ message: "Failed to ask LLM", error });
  }
});

export default router;
