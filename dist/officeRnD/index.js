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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailability = exports.generateData = exports.checkAndBookMeetingRoom = exports.seeIfAvalible = exports.handleBookMeetingRoom = exports.gotAllBookingData = exports.bookTestRoom = exports.bookValidateTestRoom = exports.getOfficeRnDMeetingBookings = void 0;
const askEmailSendingBot_1 = require("../bots/askEmailSendingBot");
const askFunctionCallingBot_1 = require("../bots/askFunctionCallingBot");
const db_1 = require("../db/db");
const send_mail_1 = require("../send-mail");
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
const getOfficeRnDToken = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!token) {
        const response = yield fetch(officeRnD.url, officeRnDOptions);
        const data = yield response.json();
        token = data.access_token;
    }
    return token;
});
const getOfficeRnDLocations = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Getting office RnD...");
    const token = yield getOfficeRnDToken();
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    const options = {
        method: "GET",
        headers,
    };
    const response = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/offices", options);
    const data = yield response.json();
    return data;
});
const getOfficeRnDMeetingRooms = (office) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield getOfficeRnDToken();
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    const options = {
        method: "GET",
        headers,
    };
    const response = yield fetch(`https://app.officernd.com/api/v1/organizations/dospace/resources?type=meeting_room&office=${office}`, options);
    const data = yield response.json();
    return data;
});
const getOfficeRnDMeetingBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Getting office RnD Bookings...");
    const token = yield getOfficeRnDToken();
    console.log(token, "<--- token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    const options = {
        method: "GET",
        headers,
    };
    const response = yield fetch(`https://app.officernd.com/api/v1/organizations/dospace/bookings?seriesStart.$gte=${new Date().toISOString()}`, options);
    const data = yield response.json();
    console.log(data, "<--- data");
    console.log(data.length, "<--- length");
});
exports.getOfficeRnDMeetingBookings = getOfficeRnDMeetingBookings;
const getOfficeRnDRate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield getOfficeRnDToken();
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    const options = {
        method: "GET",
        headers,
    };
    const response = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/rates/" + id, options);
    const data = yield response.json();
    return data;
});
const bookValidateTestRoom = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date().getTime();
    const resourceId = "64cd090aa0e5ef6713e70bfa";
    const start = new Date(now + 21 * 60 * 60 * 1000).toISOString();
    const end = new Date(now + 28 * 60 * 60 * 1000).toISOString();
    console.log("Validating book test room...");
    const token = yield getOfficeRnDToken();
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
    const response = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/bookings/summary", options);
    const data = yield response.json();
    console.log(data, "<--- data");
    console.log(data.fees[0].fee, "<--- fee");
});
exports.bookValidateTestRoom = bookValidateTestRoom;
const bookTestRoom = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date().getTime();
    const resourceId = "64cd090aa0e5ef6713e70bfa";
    const start = new Date(now + 60 * 60 * 1000).toISOString();
    const end = new Date(now + 4 * 60 * 60 * 1000).toISOString();
    console.log("Booking test room...");
    const token = yield getOfficeRnDToken();
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
    const response = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/bookings", options);
    const data = yield response.json();
    console.log(data, "<--- data");
});
exports.bookTestRoom = bookTestRoom;
const gotAllBookingData = (answer) => answer.includes("X-KLAR-X");
exports.gotAllBookingData = gotAllBookingData;
const handleBookMeetingRoom = ({ history, city, res, req, }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Handling completed chat...");
    const functionQuery = history[history.length - 1].content;
    console.log("functionQuery", functionQuery);
    const functionResponse = yield (0, askFunctionCallingBot_1.askFunctionCallingBot)({
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
            const booking = yield (0, exports.checkAndBookMeetingRoom)(json.roomId, json.start, json.end, json.description);
            if (booking === "success") {
                res.json({
                    message: encodeURIComponent("Bokningen är slutförd. Välkommen!"),
                    data: req.body,
                });
                const emailData = yield (0, askEmailSendingBot_1.askEmailSendingBot)(functionQuery);
                const emailJson = JSON.parse(emailData);
                console.log(emailJson, "<--- emailJson");
                (0, send_mail_1.sendEmail)({
                    data: emailJson,
                });
            }
            else {
                console.log(booking, "<--- Something went wrong with the booking");
            }
        }
    }
    catch (error) {
        console.log("error booking room", error);
    }
});
exports.handleBookMeetingRoom = handleBookMeetingRoom;
// See if a room is available
const seeIfAvalible = (room, start, end) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield getOfficeRnDToken();
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
    const response = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/bookings/summary", options);
    const data = yield response.json();
    if (data.message === "Resource is not available in this time slot.") {
        return false;
    }
    else if (!data.errors) {
        // TODO: Insert price data here
        return true;
    }
    else {
        console.log("Something went wrong");
    }
});
exports.seeIfAvalible = seeIfAvalible;
// See if a room is available and book it if so
const checkAndBookMeetingRoom = (room, start, end, description) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield getOfficeRnDToken();
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
    const response = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/bookings/summary", options);
    const data = yield response.json();
    if (data.message === "Resource is not available in this time slot.") {
        yield db_1.db.addLog({ name: "Room is not available", timestamp: new Date() });
        console.log("Room is not available");
    }
    else if (!data.errors) {
        console.log("Room is available");
        console.log("Proceeding to book room...");
        console.log("Booking room BBBB", room);
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
        const bookingRes = yield fetch("https://app.officernd.com/api/v1/organizations/dospace/bookings", bookingOptions);
        const bookingData = yield bookingRes.json();
        console.log(bookingData, "<--- bookingData");
        yield db_1.db.addLog({ name: "booked room", timestamp: new Date() });
        return "success";
    }
    else {
        yield db_1.db.addLog({
            name: "error",
            error: "Error booking room",
            timestamp: new Date(),
        });
        console.log("Something went wrong");
    }
    // console.log(data, "<--- data");
});
exports.checkAndBookMeetingRoom = checkAndBookMeetingRoom;
const generateData = () => __awaiter(void 0, void 0, void 0, function* () {
    const allData = {};
    const locations = yield getOfficeRnDLocations();
    yield locations.forEach((location, index1) => __awaiter(void 0, void 0, void 0, function* () {
        if (!location.isOpen)
            return null;
        allData[location.name] = {
            mötesrum: [],
        };
        console.log("Getting meeting rooms for", location.name);
        console.log(index1, "<--- index1");
        const rooms = yield getOfficeRnDMeetingRooms(location._id);
        yield rooms.forEach((room) => __awaiter(void 0, void 0, void 0, function* () {
            if (room.type !== "meeting_room")
                return null;
            const rate = yield getOfficeRnDRate(room.rate);
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
        }));
    }));
    console.log("Done");
});
exports.generateData = generateData;
const getAvailability = (site, start, end) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Checking from " +
        new Date(start).toLocaleString("sv-SE") +
        " to " +
        new Date(end).toLocaleString("sv-SE"));
    const availableRooms = [];
    const unavailableRooms = [];
    const rooms = yield getOfficeRnDMeetingRooms(site);
    for (const room of rooms) {
        if (room.type !== "meeting_room")
            return null;
        const available = yield (0, exports.seeIfAvalible)(room._id, start, end);
        if (available) {
            availableRooms.push(room.name);
        }
        else {
            unavailableRooms.push(room.name);
        }
    }
    return { "lediga rum:": availableRooms, "upptagna rum:": unavailableRooms };
});
exports.getAvailability = getAvailability;
