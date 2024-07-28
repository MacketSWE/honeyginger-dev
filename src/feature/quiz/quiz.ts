"use strict";
require("dotenv").config();

import { ChatCompletionMessageParam } from "openai/resources";

import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-20sgSWfhxJTx0Hz3NagXlYqK",
});

const Groq = require("groq-sdk");
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export type Messages = {
  role: string;
  content: string;
};
export type LLAMA_Model = "llama3-70b-8192" | "llama3-8b-8192";
export type OPENAI_Model = "gpt-4-turbo" | "gpt-3.5-turbo" | "gpt-4o";
export type LLM_Model = LLAMA_Model | OPENAI_Model;

export const askLLM = async (messages: Messages[], model: LLM_Model) => {
  let res: any = "No answer";
  if (model.includes("llama3")) {
    res = await askLLama3(messages, model as LLAMA_Model);
  } else {
    res = await askChatGPT(messages, model as OPENAI_Model);
  }

  return res;
};

export async function askChatGPT(
  messages: Messages[],
  model: OPENAI_Model,
  temperature = 1
) {
  const completion = await openai.chat.completions.create({
    messages: messages as ChatCompletionMessageParam[],
    model,
    temperature,
  });

  return completion;
}

export async function askLLama3(
  messages: Messages[],
  model: LLAMA_Model,
  temperature = 1
) {
  const completion = groq.chat.completions.create({
    messages,
    model,
    temperature,
  });

  return completion;
}
