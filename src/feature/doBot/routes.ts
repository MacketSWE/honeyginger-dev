import express from "express";
import { askDoGPT } from "./bots/askDoGPT";
import { askAvailabilityCheckerBot } from "./bots/askFunctionCallingBot";
import {
  getAvailability,
  gotAllBookingData,
  handleBookMeetingRoom,
} from "./officeRnD";

const router = express.Router();

const isDev = process.env.NODE_ENV === "development";

export const consoleLog = (message: string, logInProd: boolean = false) => {
  if (isDev || logInProd) {
    console.log(message);
  }
};

router.get("/dobot/test", async (req, res) => {
  res.json({ ipOut: "foo", ipIn: "bar" });
});

router.post("/dobot", async (req, res) => {
  try {
    const { city, category, query, history } = req.body;
    consoleLog(`${category} <--- category`);
    const gptResponse = await askDoGPT({ city, category, query, history });
    const answer = gptResponse.data.choices[0].message.content;

    if (answer.includes("X-RUM-X")) {
      // console.log("Activating availability bot...");
      const availabilityResponse = await askAvailabilityCheckerBot({
        city,
        answer,
      });
      try {
        consoleLog(
          `${availabilityResponse.choices[0]}. <-- Bot generated JSON`
        );
        const json = JSON.parse(
          availabilityResponse.choices[0].message.content || ""
        );
        consoleLog("Checking available rooms...");
        const rooms = await getAvailability(json.id, json.start, json.end);
        consoleLog(`Got available rooms: ${rooms}`);
        res.json({
          message: encodeURIComponent(
            `X-LEDIGA-RUM-X, information om rum denna tid: ${JSON.stringify(
              rooms,
              null,
              2
            )}`
          ),
          data: req.body,
        });
      } catch (error) {
        consoleLog(`${error} <--- error`);
      }
    } else if (gotAllBookingData(answer)) {
      // Handle booking completed
      handleBookMeetingRoom({ res, city, history, req });
    } else {
      res.json({ message: encodeURIComponent(answer), data: req.body });
    }
  } catch (error) {
    console.log(`${error} <--- error`);
  }
});

export default router;
