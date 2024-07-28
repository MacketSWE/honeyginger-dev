"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeetingBotPrompts = void 0;
const { getData } = require("../utils/utils");
const { getMeetingBotSystemPrompt } = require("./meetingBotSystemPrompt");
const getMeetingBotPrompts = (city) => {
    const data = getData({ city, category: "mötesrum" });
    return [
        {
            role: "system",
            content: getMeetingBotSystemPrompt(city) + "\n\n" + JSON.stringify(data),
        },
        {
            role: "user",
            content: "Nedan följer nu en exempelkonversation som du kan utgå ifrån. Exemplet handlar om en påhittad stad så datan har inget att göra med staden som du skall hjälpa till med, och siterna och rummen i exemplet är inte verkliga. Har du förstått?",
        },
        {
            role: "assistant",
            content: "Ja",
        },
        {
            role: "user",
            content: "Jag behöver ett mötesrum i Staden för minst 4 personer.",
        },
        {
            role: "assistant",
            content: `Absolut, vi har flera rum och siter i Staden. Vilken site vill du boka rum i och vilken tid behöver du det?`,
        },
        {
            role: "user",
            content: "Siten Päron, jag behöver rummet imorgon mellan kl 9 och 11.",
        },
        {
            role: "user",
            content: "X-SVAR-X, lediga rum denna tid: Gamma, Kaspersonera, TESTRUM",
        },
        {
            role: "assistant",
            content: `Tack för att du väntade. Här är ett par rum i DOSPACE Päron som är lediga imorgon och passar fyra personer:
      - Gamma: 5 personer, 400 kr/timme, utrustning: whiteboard, skärm, kamera
      - Kapersonera: 5 personer, 400 kr/timme, utrustning: whiteboard, skärm, kamera
      - TESTRUM: 5 personer, 600 kr/timme, utrustning: whiteboard, skärm, kamera

      Vänligen låt mig veta vilket rum du är intresserad av.`,
        },
        {
            role: "user",
            content: "Testrum blir bra",
        },
        {
            role: "assistant",
            content: `Perfekt!
      
      Jag behöver bara lite mer information innan jag kan genomföra bokningen.
      
      Kan du vänligen ge mig följande uppgifter:
      - E-postadress för bokningsbekräftelsen
      - Fakturauppgifter (e-post eller adress)`,
        },
        {
            role: "user",
            content: "Absolut, min email är marcus@test.com och fakturan kan skickas till inbox123@test.com",
        },
        {
            role: "assistant",
            content: `Tack Marcus!
      
      Innan vi bokar vill jag vänligen be dig bekräfta att allt ser korrekt ut:

      - Site: DOSPACE Päron
      - Rum: TESTRUM
      - Start: 2023-09-13 kl 09:00
      - Slut: 2023-09-13 kl 11:00
      - Antal personer: 4
      - Pris: 600 kr/timme
      - Utrustning i rummet: Skärm och whiteboard
      - E-post för bokningsbekräftelse: marcus@test.com
      - Faktura skickas till: inbox123@test.com`,
        },
        {
            role: "user",
            content: "Ja det ser bra ut.",
        },
        {
            role: "assistant",
            content: `X-KLAR-X`,
        },
        {
            role: "user",
            content: "Ny konversation: Jag behöver ett rum i Alfa imorgon",
        },
        {
            role: "assistant",
            content: `Självklart, kan du berätta vilken tid du behöver rummet och hur många personer det ska rymma?`,
        },
        {
            role: "user",
            content: `Mellan kl 9 och 11. Vi är 10 personer`,
        },
        {
            role: "assistant",
            content: `Tack för att du väntade. Här är några rum i DOSPACE Alfa som är lediga imorgon och passar tio personer:

      Beta: 10 personer, 800 kr/timme, utrustning: whiteboard, skärm, kamera
      Omega: 6 personer, 600 kr/timme, utrustning: whiteboard, skärm, kamera
      Delta: 5 personer, 350 kr/timme, utrustning: whiteboard, skärm, kamera
      Epsilon: 5 personer, 400 kr/timme, utrustning: whiteboard, skärm, kamera
      Vänligen låt mig veta vilket rum du är intresserad av.`,
        },
        {
            role: "user",
            content: `Många av dessa rum passar inte 10 personer. Rekommera bara rum som ligger nära det efterfrågade antalet.`,
        },
        {
            role: "assistant",
            content: `Du har helt rätt, jag ber om ursäkt för missförståndet. Det finns ett rum ledigt som passar er grupp vid den tiden:

      Beta: 10 personer, 800 kr/timme, utrustning: whiteboard, skärm, kamera
      
      Vill du boka Beta?`,
        },
        {
            role: "user",
            content: `Jag vill boka ett rum på Alfa imorgon mellan kl 07:00 och 09:00.`,
        },
        {
            role: "assistant",
            content: `Då du vill boka utanför kontorstid så ber vi dig kontakta sitemangaren på Alfa.
      Namn: Exempel Exempelsson
      Telefon: Exempel,
      Email: Exempel.

      Tack för att du kontaktade DOSPACE! X-SITEMANAGER-X`,
        },
        {
            role: "user",
            content: `Jag vill boka ett rum på söndag på Alfa mellan kl 08:00 och 09:00.`,
        },
        {
            role: "assistant",
            content: `Då du vill boka en söndag så ber vi dig kontakta sitemangaren på Alfa.
      Namn: Exempel Exempelsson
      Telefon: Exempel,
      Email: Exempel.

      Tack för att du kontaktade DOSPACE! X-SITEMANAGER-X`,
        },
        {
            role: "user",
            content: `Jag vill boka ett rum på lördag mellan kl 09:00 och 11:00`,
        },
        {
            role: "assistant",
            content: `Då du vill boka en lördag så ber vi dig kontakta sitemangaren på Alfa.
      Namn: Exempel Exempelsson
      Telefon: Exempel,
      Email: Exempel.

      Tack för att du kontaktade DOSPACE! X-SITEMANAGER-X`,
        },
        {
            role: "user",
            content: "Använd tidigare svar som referens, men från och med nu är det en ny användare som ställer frågor. Du ska nu nollställa din information som testanvändaren gav om antalet personer och datum och site, med mera.",
        },
        {
            role: "assistant",
            content: `Jag förstår!`,
        },
    ];
};
exports.getMeetingBotPrompts = getMeetingBotPrompts;
