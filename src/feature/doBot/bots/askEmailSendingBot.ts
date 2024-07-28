import { openai } from "../functions";

const testMessage = `
Tack för din bokningsförfrågan. Innan vi bokar ber vi dig bekräfta att allt ser korrekt ut.
Här är sammanställningen av din bokning:

- Mötesrum: TESTRUM
- Site: DOSPACE Alfa
- Datum och tid: 2023-08-31 kl 09:00 till 2023-08-31 kl 11:00
- Pris: 600 kr/timme, totalt 1200 kr för 2 timmar
- Utrustning i rummet: whiteboard, skärm, kamera
- E-postadress: mthorelius@gmail.com
- Faktura skickas till: inbox@hej.se

Vänligen bekräfta att all information stämmer.`;

export const askEmailSendingBot = async (query: string) => {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Du är expert på att generera en JSON som ska fungera som input till en funktion för att boka mötesrum.
          Datan du får kommer alltid att se ut ungefär så här: ${testMessage}. Du är en expert på att läsa ut information från denna text och avgöra vad som är relevant.
          Det du ska göra är att läsa ut vilket mötesrum bokningen gäller och sammanfatta enligt följande format:
          {
            site: "",
            rum: "",
            start: "",
            slut: "",
            pris: "",
            epost: "",
            faktura: ""
          }
          Med "rum" avses rummets namn.  I meddelandet är tiden alltid angiven i svensk tidszon. 
          Du ska enbart svara med denna JSON-fil, ingenting annat. Den ska innhålla fälten "site", "rum", "start", "slut", "pris", "epost" och "faktura". Du ska inte skriva ut något annat. Om du har otillräcklig information för att kunna skapa denna JSON, kan du svara "X-FEL-X".,
          `,
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
