import { askEmailSendingBot } from "../bots/askEmailSendingBot";
import { askFunctionCallingBot } from "../bots/askFunctionCallingBot";
import { db } from "../db/db";
import { sendEmail } from "../send-mail";
import { EmailData } from "../types";

const doBotId = "64e5d2b3d7a719478ccfaf3a";

const officeRnD = {
  url: "https://identity.officernd.com/oauth/token",
  client_id: "J5zIIrUyzN3tvdU1",
  client_secret: "6QNwson6PS1z9S9f57qJcjtmFuAt8GO0",
  grant_type: "client_credentials",
  scope: "officernd.api.read officernd.api.write",
};

const officeRnDHeaders = {
  "Content-Type": "application/x-www-form-urlencoded",
};

const officeRnDOptions = {
  method: "POST",
  headers: officeRnDHeaders,
  body: new URLSearchParams(officeRnD),
};

var token = "";
const getOfficeRnDToken = async () => {
  if (!token) {
    const response = await fetch(officeRnD.url, officeRnDOptions);
    const data = await response.json();
    token = data.access_token;
  }

  return token;
};

const getOfficeRnDLocations = async () => {
  console.log("Getting office RnD...");
  const token = await getOfficeRnDToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    "https://app.officernd.com/api/v1/organizations/dospace/offices",
    options
  );
  const data = await response.json();

  return data;
};

const getOfficeRnDMeetingRooms = async (office: any) => {
  const token = await getOfficeRnDToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    `https://app.officernd.com/api/v1/organizations/dospace/resources?type=meeting_room&office=${office}`,
    options
  );
  const data = await response.json();

  return data;
};

export const getOfficeRnDMeetingBookings = async () => {
  console.log("Getting office RnD Bookings...");
  const token = await getOfficeRnDToken();
  console.log(token, "<--- token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    `https://app.officernd.com/api/v1/organizations/dospace/bookings?seriesStart.$gte=${new Date().toISOString()}`,
    options
  );
  const data = await response.json();

  console.log(data, "<--- data");
  console.log(data.length, "<--- length");
};

const getOfficeRnDRate = async (id: any) => {
  const token = await getOfficeRnDToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    "https://app.officernd.com/api/v1/organizations/dospace/rates/" + id,
    options
  );
  const data = await response.json();
  return data;
};

export const bookValidateTestRoom = async () => {
  const now = new Date().getTime();
  const resourceId = "64cd090aa0e5ef6713e70bfa";
  const start = new Date(now + 21 * 60 * 60 * 1000).toISOString();
  const end = new Date(now + 28 * 60 * 60 * 1000).toISOString();
  console.log("Validating book test room...");
  const token = await getOfficeRnDToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      booking: {
        start: { dateTime: start },
        end: { dateTime: end },
        resourceId,
      },
    }),
  };

  const response = await fetch(
    "https://app.officernd.com/api/v1/organizations/dospace/bookings/summary",
    options
  );
  const data = await response.json();
  console.log(data, "<--- data");
  console.log(data.fees[0].fee, "<--- fee");
};

export const bookTestRoom = async () => {
  const now = new Date().getTime();
  const resourceId = "64cd090aa0e5ef6713e70bfa";

  const start = new Date(now + 60 * 60 * 1000).toISOString();
  const end = new Date(now + 4 * 60 * 60 * 1000).toISOString();
  console.log("Booking test room...");
  const token = await getOfficeRnDToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      start: { dateTime: start },
      end: { dateTime: end },
      resourceId,
      member: doBotId,
    }),
  };

  const response = await fetch(
    "https://app.officernd.com/api/v1/organizations/dospace/bookings",
    options
  );
  const data = await response.json();
  console.log(data, "<--- data");
};

export const gotAllBookingData = (answer: any) => answer.includes("X-KLAR-X");

export const handleBookMeetingRoom = async ({
  history,
  city,
  res,
  req,
}: any) => {
  console.log("Handling completed chat...");
  const functionQuery = history[history.length - 1].content;
  console.log("functionQuery", functionQuery);
  const functionResponse = await askFunctionCallingBot({
    city,
    query: functionQuery,
  });
  const answer = functionResponse.data.choices[0].message.content;
  try {
    const json = JSON.parse(answer);
    if (json.roomId && json.start && json.description && json.end) {
      console.log("JSON generated correctly, booking meeting room...");
      console.log(json, "<-- json");

      console.log(json.description, "<--- description");

      const booking = await checkAndBookMeetingRoom(
        json.roomId,
        json.start,
        json.end,
        json.description
      );
      if (booking === "success") {
        res.json({
          message: encodeURIComponent("Bokningen är slutförd. Välkommen!"),
          data: req.body,
        });
        const emailData = await askEmailSendingBot(functionQuery);
        const emailJson: EmailData = JSON.parse(emailData);
        console.log(emailJson, "<--- emailJson");
        sendEmail({
          data: emailJson,
        });
      } else {
        console.log(booking, "<--- Something went wrong with the booking");
      }
    }
  } catch (error) {
    console.log("error booking room", error);
  }
};

// See if a room is available
export const seeIfAvalible = async (room: any, start: any, end: any) => {
  const token = await getOfficeRnDToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      booking: {
        start: { dateTime: start },
        end: { dateTime: end },
        resourceId: room,
      },
    }),
  };

  const response = await fetch(
    "https://app.officernd.com/api/v1/organizations/dospace/bookings/summary",
    options
  );
  const data = await response.json();
  if (data.message === "Resource is not available in this time slot.") {
    return false;
  } else if (!data.errors) {
    // TODO: Insert price data here
    return true;
  } else {
    console.log("Something went wrong");
  }
};

// See if a room is available and book it if so
export const checkAndBookMeetingRoom = async (
  room: any,
  start: any,
  end: any,
  description: any
) => {
  const token = await getOfficeRnDToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({
      booking: {
        start: { dateTime: start },
        end: { dateTime: end },
        resourceId: room,
      },
    }),
  };

  const response = await fetch(
    "https://app.officernd.com/api/v1/organizations/dospace/bookings/summary",
    options
  );
  const data = await response.json();
  if (data.message === "Resource is not available in this time slot.") {
    await db.addLog({ name: "Room is not available", timestamp: new Date() });
    console.log("Room is not available");
  } else if (!data.errors) {
    console.log("Room is available");
    console.log("Proceeding to book room...");
    const bookingOptions = {
      method: "POST",
      headers,
      body: JSON.stringify({
        start: { dateTime: start },
        end: { dateTime: end },
        resourceId: room,
        member: doBotId,
        description,
      }),
    };
    const bookingRes = await fetch(
      "https://app.officernd.com/api/v1/organizations/dospace/bookings",
      bookingOptions
    );
    const bookingData = await bookingRes.json();
    await db.addLog({ name: "booked room", timestamp: new Date() });
    return "success";
  } else {
    await db.addLog({
      name: "error",
      error: "Error booking room",
      timestamp: new Date(),
    });
    console.log("Something went wrong");
  }

  // console.log(data, "<--- data");
};

export const generateData = async () => {
  const allData: any = {};
  const locations = await getOfficeRnDLocations();
  await locations.forEach(async (location: any, index1: any) => {
    if (!location.isOpen) return null;
    allData[location.name] = {
      mötesrum: [],
    };
    console.log("Getting meeting rooms for", location.name);
    console.log(index1, "<--- index1");
    const rooms = await getOfficeRnDMeetingRooms(location._id);
    await rooms.forEach(async (room: any) => {
      if (room.type !== "meeting_room") return null;
      const rate = await getOfficeRnDRate(room.rate);
      allData[location.name].mötesrum.push({
        namn: room.name,
        id: room._id,
        pris: rate.price,
        kapacitet: room.size,
        utrustning: room.description,
      });
      console.log(" ");
      console.log(" ");
      console.log(" ");
      console.log(" ");
      console.log(JSON.stringify(allData, null, 2), "<-- all data");
    });
  });
  console.log("Done");
};

export const getAvailability = async (site: any, start: any, end: any) => {
  console.log(
    "Checking from " +
      new Date(start).toLocaleString("sv-SE") +
      " to " +
      new Date(end).toLocaleString("sv-SE")
  );

  const availableRooms = [];
  const unavailableRooms = [];

  const rooms = await getOfficeRnDMeetingRooms(site);

  for (const room of rooms) {
    if (room.type !== "meeting_room") return null;
    const available = await seeIfAvalible(room._id, start, end);
    if (available) {
      availableRooms.push(room.name);
    } else {
      unavailableRooms.push(room.name);
    }
  }

  return { "lediga rum:": availableRooms, "upptagna rum:": unavailableRooms };
};
