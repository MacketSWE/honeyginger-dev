import { City } from "../../types";
import { getData } from "../utils/utils";

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

const testMessage2 = `
Site: DOSPACE Alfa
Start: 2023-09-12 kl 09:00
Slut: 2023-09-12 kl 11:00
X-RUM-X`;

interface Props {
  city: City;
  query?: string;
  answer?: string;
}

export const getFunctionCallingPrompt = ({ city, query }: Props) => {
  const data = getData({ city, category: "mötesrum" });

  return [
    {
      role: "system",
      content: `Du är expert på att generera en JSON som ska fungera som input till en funktion för att boka mötesrum.
      Datan du får kommer alltid att se ut ungefär så här: ${testMessage}. Du är en expert på att läsa ut information från denna text och avgöra vad som är relevant.
      Det du ska göra är att läsa ut vilket mötesrum bokningen gäller och baserat på mötesrummets namn hämta rummets id från denna lista: ${JSON.stringify(
        data
      )}.
      Rummets id ska sedan vara med i den JSON som du returnerar, under nyckeln "roomId".
      En annan nyckel som ska finnas med är "description" som ska innehålla e-postadress samt fakturauppgifter. Slutligen ska tid finnas med i form av nycklarna "start" och "end". I meddelandet är tiden alltid angiven i svensk tidszon. Här ska du läsa ut start- och sluttid från texten och konvertera till ISO-format, UTC-tid. Exempel på en UTC ISO-sträng är: 2023-08-28T12:23:15Z.
      Du ska enbart svara med denna JSON-fil, ingenting annat. Den ska innhålla fälten "roomId", "description", "start" och "end". Du ska inte skriva ut något annat. Om du har otillräcklig information för att kunna skapa denna JSON, kan du svara "X-FEL-X".,
      `,
    },
    {
      role: "user",
      content: query,
    },
  ];
};

export const getAvailabilityCheckerPrompt = ({ city, answer }: Props) => {
  const data = getData({ city, category: "id" });
  return [
    {
      role: "system",
      content: `Du är expert på att generera en JSON som ska fungera som input till en funktion för att se om mötesrum är lediga en viss tid.
      Datan du får kommer alltid att se ut ungefär så här: ${testMessage2}. Du är en expert på att läsa ut information från denna text och avgöra vad som är relevant.
      Byggnadens (Sitens) id ska vara med i den JSON som du returnerar, under nyckeln "id". Du ska nu få ett exempel hur du hittar detta id. Du kommer få en fil som har denna struktur:
      
      {
        DOSPACE Äpple: {
          id: "asdjkha882jSasdjlh"
        }
      }

      Det är värdet av "id" som ska vara med. Observera att detta bara var ett exempel som du inte ska använda. 
      
      Slutligen ska tid finnas med i form av nycklarna "start" och "end". I meddelandet är tiden alltid angiven i svensk tidszon. Här ska du läsa ut start- och sluttid från texten och konvertera till ISO-format, UTC-tid. Exempel på en UTC ISO-sträng är: 2023-08-28T12:23:15Z.
      Du ska enbart svara med denna JSON-fil, ingenting annat. Den ska innhålla fälten "id", "start" och "end". Du ska inte skriva ut något annat. Om du har otillräcklig information för att kunna skapa denna JSON, kan du svara "X-FEL-X".

      Här kommer filen som du ska hämta värdet id ifrån: ${JSON.stringify(data)}
      `,
    },
    {
      role: "user",
      content: answer,
    },
  ];
};

module.exports = {
  getFunctionCallingPrompt,
  getAvailabilityCheckerPrompt,
};
