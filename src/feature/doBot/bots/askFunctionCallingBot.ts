import { City } from "../types";
import { openai } from "../functions";
import {
  getFunctionCallingPrompt,
  getAvailabilityCheckerPrompt,
} from "./prompts/meetingFunctionCallingPrompts";

interface AskFunctionCallingBotProps {
  city: City;
  query: string;
}

export const askFunctionCallingBot = async ({
  city,
  query,
}: AskFunctionCallingBotProps) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [...getFunctionCallingPrompt({ city, query })],
    temperature: 0.3,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response;
};

interface AskAvailabilityCheckerBotProps {
  city: City;
  answer: string;
}

export const askAvailabilityCheckerBot = async ({
  city,
  answer,
}: AskAvailabilityCheckerBotProps) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [...getAvailabilityCheckerPrompt({ city, answer })],
    temperature: 0.1,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response;
};

export const askEmailBot = async (query: string) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Du är expert på att utläsa e-postadresser från text. Du ska svara med en e-postadress som du hittar i texten, som INTE är adressen för faktura. Du ska utläsa e-post-adressen som ska skickas som bekräftelse och enbart svara den. Om du inte hittar någon e-postadress ska du svara "X-FEL-X". Du svarar annars ENBART med e-postadressen.`,
      },
      {
        role: "user",
        content:
          "E-post för bokningsbekräftelse: mthorelius@gmail.com, Faktura skickas till: mthorelius@gmail.com",
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
};
