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
exports.sendEmail = void 0;
const { google } = require("googleapis");
require("dotenv").config();
function sendEmail(_a) {
    return __awaiter(this, arguments, void 0, function* ({ data }) {
        const jwtClient = new google.auth.JWT({
            email: "dobot-467@dobot-400808.iam.gserviceaccount.com",
            key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCUXzfXo6vf1i0F\n" +
                process.env.GSUITE_SECRET +
                "\nJCf/fxpY6PcsEHTlJez4cY1aCpWqchpOtWz61yHM+rIE6ahdnZO51MtGLHOvPFyP\nDKB43c14rZgK4vBYtj7TEljNQTlUgHqcnaQUGNsd+swtB6BFcnwHk6sPQUj6Aevl\neP2VO+IJ22jGDgvWx/NGsWzs3Gce543tI534zY03kO+BiDzcQMFrWFTEpU3lAYu5\nZnlgQ542uHGBq7OuLhBvbWM+N0cG2AQ5GW8xmhLkRKu+37bHIVhkImzGo0muvUlK\nx/cWgYn1AgMBAAECggEABl2/i6UeLtCFxgTBMB74VOwXgoRUm3+PXe4z8qPxZ0Q6\n1wlddhXZST9r7Lr+1gYov53fKsSvM2PulCblAHV3r/DvChj6qwphjJdytTZXDaUv\ns8jdEDZC4QSwtr0/2CR2vjZ/Mled7xrr7cdg6065DkCEkZMDNQs8ztmurb/qsdFw\ntG7mCjOZwLiB1+e3XpygtAwi5qk2MZApdJkAjTUCB4gsBN7EUWsfiS08M0hJmkJC\n2YaxXahDDHRe0FYTaLfe3Okd7aCGRx+ViChsG3/3xc/xnBI+sqBqMHWD3HHrtNnn\nyqHK/LSOsqQCSvAVUO0SDM6CEdw6S4ZYCSz2kjco0QKBgQDKzVqfz6weQBfKBPih\nWPqzwo8PpRj7fBfNWNMSyT13o5Md6/5L/AcYhJ9tY6b0mPjlTdY9MwhfYJO21PHC\nvX208f5Pp5Rs77YNKDreT/UzAGWuU7P1GReYple3ViE4o7v/sbXxg3oZy4t3R7AT\n0rVmyrNwtcou2a0WZaHvnCOgIwKBgQC7Sr73yTEFTdcfQFCcBq/sn52luHCxBG/a\nYi67++uMlLGS2/4pcTMcpIDwjv2mur83wQcyfj94bRLF5sV53aTcsuPGl+0zSfki\n0ud8HiMmltmNSJBv2Il3V37h/K5CNXGJCCefUavcw/5PJQkDXRSj3R2EOcnL1V6I\nJpryEVVDBwKBgBUhCAwWauxL6S6XDgBhcN1Bq/4JSW0KJMC0PGl8pfbNCAraB4iL\nHYIkbyfKdh6NwYDCd0uxAXJOcZVe4kFT1MEBZWmPIBupbeI5CskWs4k4xV9AQUOL\n9bVlv0XOp29rP68IKNicxh/h4QnwYhvunA+1lrRrfEEdVLc8p357WgrZAoGAPCAX\nxFYrTYeaquaruhsPeQgYxO28B6fj/JiOZjzOdnf5taq4Ije779MDrbZJya+j2VM3\na0dKOu/RGgUmmiPEXDF1m/iD5nY1668HLzpBkI7W0ltcOvupzc0h54yFqK2dgB9F\nEQlYAexNhLzf8tt718sRQbSHis85pL23+kQEOhsCgYBRHfJxerewImNVHv+Bq3Rp\nk3x7EAjZBpn+S6ALsZPS4NZZzdY4H6ut0ZppLHlQ8EbmEgA2NnR8MX7iyu9IAy2E\nlFGsQyPWG3I71Fq5LPFutzrIXs4X7JA+rNwPZk1hjq5Faj/oxOGeBI/QRunSvd5w\ndx0Yb6ngSGkItZH0uhNsQQ==\n-----END PRIVATE KEY-----\n",
            scopes: ["https://www.googleapis.com/auth/gmail.send"],
            subject: "bot@dospace.se",
        });
        const gmail = google.gmail({
            version: "v1",
            auth: jwtClient,
        });
        const subject = "Bokning av mötesrum";
        const encodedSubject = "=?UTF-8?B?" + Buffer.from(subject).toString("base64") + "?=";
        const raw = Buffer.from('Content-Type: text/html; charset="UTF-8"\n' +
            "MIME-Version: 1.0\n" +
            "Content-Transfer-Encoding: 7bit\n" +
            "to: " +
            data.epost +
            "\n" +
            "subject: " +
            encodedSubject +
            "\n\n" +
            "<html><body>" +
            "<p>Site: " +
            data.site +
            "</p>" +
            "<p>Rum: " +
            data.rum +
            "</p>" +
            "<p>Från: " +
            data.start +
            "</p>" +
            "<p>Till: " +
            data.slut +
            "</p>" +
            "<p>Pris: " +
            data.pris +
            "</p>" +
            "<p>Bokat av: " +
            data.epost +
            "</p>" +
            "<p>Faktura: " +
            data.faktura +
            "</p>" +
            "<br />" +
            "<p>Tack för din bokning!<br /><br />Välkommen!</p>" +
            "</body></html>")
            .toString("base64")
            .replace(/\+/g, "-")
            .replace(/\//g, "_");
        try {
            // db.addLog({
            //   name: "Trying to send email",
            //   timestamp: new Date(),
            // });
            const res = yield gmail.users.messages.send({
                userId: "me",
                requestBody: {
                    raw,
                },
            });
            console.log("Email sent:", res.data.id);
            // db.addLog({
            //   name: "Did send email",
            //   timestamp: new Date(),
            // });
        }
        catch (error) {
            // db.addLog({
            //   name: "Failed to send email",
            //   timestamp: new Date(),
            //   error: `${error}`,
            // });
            console.error("Failed to send email:", error);
        }
    });
}
exports.sendEmail = sendEmail;
