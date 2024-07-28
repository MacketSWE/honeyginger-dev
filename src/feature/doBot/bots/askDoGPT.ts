import { Category, City, CityCategoryProp } from "../types";

const { openai } = require("../functions");
const { getGeneralInfoPrompts } = require("./prompts/generalInfoPrompts");
const { getMeetingBotPrompts } = require("./prompts/meetingBotPrompts");

const getPrompts = ({ city, category }: CityCategoryProp) => {
  if (category === "info") {
    return getGeneralInfoPrompts();
  }

  if (category === "mötesrum") {
    return getMeetingBotPrompts(city);
  }
};

interface AskDoGPTProps {
  query: string;
  history: any;
  city: City;
  category: Category;
}
export const askDoGPT = async ({
  query,
  history,
  city,
  category,
}: AskDoGPTProps) => {
  // console.log(`Asking GPT-4 for ${city} ${category}...`);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
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
};
