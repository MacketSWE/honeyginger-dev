const info = `
  Kort om DOSPACE
  Hos oss tecknar du flexibla medlemskap istället för att låsa upp dig på långa, statiska kontorsavtal. Ett medlemskap på DOSPACE ger dig access till alla våra siter runt om i Sverige, där du kan jobba från eget kontor, vid egen skrivbordsplats eller från våra inspirerande loungeytor. Du blir en del av vårt community och får ta del av den absolut bästa möjliga arbetsplatsupplevelsen. Välkommen in!
  Våra Kontor (coworking-siter)
  DOSPACE finns i flera städer. I några av städerna har vi siter (dessa kallas också coworking-anläggningar och kontorshotell) på flera adresser.


  Mer om DOSPACE
  Hos oss tecknar du flexibla medlemskap istället för att låsa upp dig på långa, statiska kontorsavtal. Ett medlemskap på DOSPACE ger dig access till alla våra siter runt om i Sverige, där du kan jobba från eget kontor, vid egen skrivbordsplats eller från våra inspirerande loungeytor. Du blir en del av vårt community och får ta del av den absolut bästa möjliga arbetsplatsupplevelsen. Välkommen in!

  På DOSPACE blir du del av ett stort socialt sammanhang fyllt av individer med olika erfarenheter, från olika branscher och generationer.

  Här kan du löpande anpassa ditt upplägg efter dina behov. Växa, krympa, byta kontor eller säga upp, ångra dig och teckna igen - inget problem.

  Kort sagt så löser vi allt som har med kontoret att göra så du kan fokusera på att trivas och jobba. Mer effektivt och ärligt talat rätt skönt tycker många.

  Om våra Medlemskap
  Hot Desk
  Du får 24/7 access till vår loungeyta, gott kaffe och mötesrumstimmar. Stans trevligaste och mest flexibla arbetsplats i ett!

  Private Desk
  Du får ditt egna skrivbord i ett rum du delar med andra. Perfekt för dig som vill vara omgiven av andra men behöver t.ex en extraskärm eller förvaring.

  Office
  Ni får ett eget, nyckelfärdigt kontor på DOSPACE i anslutning till loungeytorna. Passar er som vill ha lite mer privacy och finns i storlekarna 1-20 personer

  Grejen med DOSPACE är känslan på plats och den är i det närmsta omöjlig att förmedla via bilder och text. Boka en visning och kom på besök för att se om vi är något för dig! Vi bjuder på kaffet ☕️
`;

const data = {
  Linköping: {
    "DOSPACE Link": {
      info: {
        Sitemanager: "Maria Skotte",
        Telefonnummer: "076-774 71 71",
        Mailadress: "link@dospace.se",
        Adress: "Gamla Tanneforsvagen 92, 582 54 Linköping",
      },
      medlemskap: {
        "Hot Desk": "2500 kr/mån ex moms",
        "Private Desk": "4900 kr/mån ex moms",
        Office: "Från 5400 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Incontro",
          kapacitet: "8",
          pris: "600",
          utrustning: [
            "digital skarm med HDMI/USB-ingang",
            "webbkamera",
            "skrivtavla med pennor och magneter",
          ],
        },
        {
          namn: "Halawai",
          kapacitet: "6",
          pris: "500",
          utrustning: [
            "digital skarm med HDMI/USB-ingang",
            "webbkamera",
            "skrivtavla med pennor och magneter",
          ],
        },
        {
          namn: "Treffen",
          kapacitet: "3",
          pris: "250",
          utrustning: ["skrivtavla med pennor och magneter"],
        },
        {
          namn: "Conventus",
          kapacitet: "12",
          pris: "800",
          utrustning: [
            "digital skarm med HDMI/USB-ingang",
            "webbkamera",
            "skrivtavla med pennor och magneter",
          ],
        },
        {
          namn: "Møde",
          kapacitet: "2",
          pris: "200",
          utrustning: ["skrivtavla med pennor och magneter"],
        },
        {
          namn: "Mitingu",
          kapacitet: "4",
          pris: "400",
          utrustning: [
            "digital skarm med HDMI/USB-ingang",
            "webbkamera",
            "skrivtavla med pennor och magneter",
            "soffa",
          ],
        },
        {
          namn: "Ganawa on Plan 18",
          kapacitet: "4",
          pris: "300",
          utrustning: [
            "digital skarm med HDMI/USB-ingang",
            "webbkamera",
            "skrivtavla med pennor och magneter",
          ],
        },
        {
          namn: "Reunión",
          kapacitet: "8",
          pris: "600",
          utrustning: [
            "digital skarm med HDMI/USB-ingang",
            "webbkamera",
            "skrivtavla med pennor och magneter",
          ],
        },
        {
          namn: "Fundur",
          kapacitet: "3",
          pris: "250",
          utrustning: ["skrivtavla med pennor och magneter"],
        },
      ],
    },
    "DOSPACE Stora Torget": {
      info: {
        Sitemanager: "Maria Skotte",
        Telefonnummer: "076-774 71 71",
        Mailadress: "storatorget@dospace.se",
        Adress: "Stora Torget 3, 582 19 Linköping",
      },
      medlemskap: {
        "Hot Desk": "2500 kr/mån ex moms",
        "Private Desk": "4700 kr/mån ex moms",
        Office: "Från 4900 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Coronado",
          kapacitet: "10",
          pris: "650",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Laguna",
          kapacitet: "5",
          pris: "350",
          utrustning: ["whiteboard"],
        },
        {
          namn: "Malibu",
          kapacitet: "16",
          pris: "900",
          utrustning: ["whiteboard", "skarm", "kamera", "bladderblock"],
        },
        {
          namn: "Moonstone",
          kapacitet: "4",
          pris: "400",
          utrustning: ["whiteboard", "skarm"],
        },
        {
          namn: "Redondo",
          kapacitet: "6",
          pris: "500",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Venice",
          kapacitet: "8",
          pris: "500",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
      ],
    },
    "DOSPACE Mjardevi Center": {
      info: {
        Sitemanager: "Maria Skotte",
        Telefonnummer: "073-387 65 27",
        Mailadress: "mjardevi@dospace.se",
        Adress: "Teknikringen 10, 583 30 Linköping",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/mån ex moms",
        "Private Desk": "3700 kr/mån ex moms",
        Office: "Från 3600 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Discovery",
          kapacitet: "5",
          pris: "400",
          utrustning: ["whiteboard", "skarm"],
        },
        {
          namn: "Millenium Falcon",
          kapacitet: "4",
          pris: "250",
          utrustning: ["whiteboard"],
        },
        {
          namn: "Voyager",
          kapacitet: "10",
          pris: "600",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
      ],
    },
    "DOSPACE Alfa": {
      info: {
        Sitemanager: "Mimmi Karlsson",
        Telefonnummer: "072-394 76 66",
        Mailadress: "alfa@dospace.se",
        Adress: "Industrigatan 5, 582 77 Linköping",
      },
      övrigt: {
        visningsvideo: "https://youtu.be/qZvKnVeDyqs",
      },
      medlemskap: {
        "Hot Desk": "2500 kr/mån ex moms",
        "Private Desk": "4300 kr/mån ex moms",
        Office: "Från 4800 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Alpha",
          kapacitet: "25",
          pris: "1000",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Aurum",
          kapacitet: "100",
          pris: "5000",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Beta",
          kapacitet: "10",
          pris: "800",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Delta",
          kapacitet: "Ej specificerat",
          pris: "350",
          utrustning: "Ej specificerat",
        },
        {
          namn: "Epsilon",
          kapacitet: "6",
          pris: "400",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Ferrum",
          kapacitet: "8",
          pris: "600",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Gamma",
          kapacitet: "5",
          pris: "400",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Kapersonera",
          kapacitet: "5",
          pris: "400",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Omega",
          kapacitet: "6",
          pris: "600",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
        {
          namn: "Vitrum",
          kapacitet: "20",
          pris: "500",
          utrustning: ["whiteboard", "skarm", "kamera"],
        },
      ],
    },
  },
  Norrkoping: {
    "DOSPACE Industrilandskapet": {
      info: {
        Sitemanager: "Nina Rydingsvärd",
        Telefonnummer: "070-893 96 29",
        Mailadress: "norrkoping@dospace.se",
        Adress: "Västgötegatan 7, 602 21 Norrköping",
      },
      medlemskap: {
        "Hot Desk": "2100 kr/månad",
        "Private Desk": "3600 kr/månad",
        Office: "Från 4100 kr/månad/person",
      },
      rum: [
        [
          {
            namn: "Cromford",
            kapacitet: "6",
            pris: "400",
            utrustning: ["whiteboard", "TV"],
          },
          {
            namn: "Hawthorn",
            kapacitet: "10",
            pris: "600",
            utrustning: ["whiteboard", "TV"],
          },
          {
            namn: "Kingston",
            kapacitet: "8",
            pris: "550",
            utrustning: "Ej specificerat",
          },
          {
            namn: "Lounge",
            kapacitet: "50",
            pris: "2800 kr/dag",
            utrustning: "Ej specificerat",
          },
          {
            namn: "Plant studio",
            kapacitet: "3",
            pris: "250",
            utrustning: ["whiteboard", "TV"],
          },
        ],
      ],
    },
    "DOSPACE Norrköping City": {
      info: {
        Sitemanager: "Nina Rydingsvärd",
        Telefonnummer: "070-893 96 29",
        Mailadress: "norrkoping@dospace.se",
        Adress: "Drottninggatan 59, 602 32 Norrköping",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/månad",
        "Private Desk": "3900 kr/månad",
        Office: "Från 4900 kr/månad/person",
      },
      övrigt: {
        status: "Siten öppnar hösten 2023",
      },
      rum: [],
    },
    "DOSPACE Jungfrun": {
      info: {
        Sitemanager: "Nina Rydingsvärd",
        Telefonnummer: "070-893 96 29",
        Mailadress: "norrkoping@dospace.se",
        Adress: "Saltängen, 602 38 Norrköping",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/månad",
        "Private Desk": "3900 kr/månad",
        Office: "Från 4900 kr/månad/person",
      },
      övrigt: {
        status: "Siten öppnar hösten 2024",
      },
      rum: [],
    },
  },
  Jönkoping: {
    "DOSPACE Östra Storgatan": {
      info: {
        Sitemanager: "Calle Jonzon",
        Telefonnummer: "072-377 49 10",
        Mailadress: "calle@dospace.se",
        Adress: "Östra Storgatan 9, 553 20 Jönköping",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/mån ex moms",
        "Private Desk": "3800 kr/mån ex moms",
        Office: "Från 4300 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Aalto",
          kapacitet: "8",
          pris: "600",
          utrustning: ["TV"],
        },
        {
          namn: "Ganni",
          kapacitet: "4",
          pris: "350",
          utrustning: ["TV", "whiteboard"],
        },
        {
          namn: "Goya",
          kapacitet: "6",
          pris: "300",
          utrustning: "Ej specificerat",
        },
        {
          namn: "Klint",
          kapacitet: "3",
          pris: "200",
          utrustning: ["whiteboard"],
        },
        {
          namn: "Lamino",
          kapacitet: "6",
          pris: "400",
          utrustning: ["TV", "whiteboard"],
        },
        {
          namn: "Lanto",
          kapacitet: "3",
          pris: "350",
          utrustning: ["TV"],
        },
        {
          namn: "Panton",
          kapacitet: "10",
          pris: "800",
          utrustning: ["TV", "whiteboard", "webbkamera"],
        },
        {
          namn: "Wegner",
          kapacitet: "2",
          pris: "250",
          utrustning: ["whiteboard"],
        },
      ],
    },
    "DOSPACE Munksjotornet": {
      info: {
        Sitemanager: "Linnea Lackmar",
        Telefonnummer: "072-399 70 80",
        Mailadress: "linnea@dospace.se",
        Adress: "Vaggerydsgatan 1, 553 30 Jönköping",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/mån ex moms",
        "Private Desk": "3900 kr/mån ex moms",
        Office: "Från 4200 kr/mån/person ex moms",
      },
      rum: [
        { namn: "Furusato", kapacitet: "8", pris: "450" },
        { namn: "Komorebi", kapacitet: "4", pris: "300" },
        { namn: "Mankai", kapacitet: "8", pris: "450" },
        { namn: "Shoganai", kapacitet: "4", pris: "300" },
        { namn: "Tsukimi", kapacitet: "8", pris: "450" },
        { namn: "Yugen", kapacitet: "3", pris: "250" },
        { namn: "Zenkei", kapacitet: "12", pris: "700" },
      ],
    },
  },
  Gavle: {
    "DOSPACE Norra Kungsgatan": {
      info: {
        Sitemanager: "Elin Bogren",
        Telefonnummer: "076-770 72 72",
        Mailadress: "gavle@dospace.se",
        Adress: "Norra Kungsgatan 1, 803 20 Gävle",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/mån ex moms",
        "Private Desk": "3900 kr/mån ex moms",
        Office: "Från 4400 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Alfapet",
          kapacitet: "8",
          pris: "500",
          utrustning: ["whiteboard", "TV"],
        },
        {
          namn: "Backgammon",
          kapacitet: "3",
          pris: "250",
          utrustning: "Ej specificerat",
        },
        {
          namn: "Couronne",
          kapacitet: "4",
          pris: "350",
          utrustning: "Ej specificerat",
        },
        {
          namn: "Kalaha",
          kapacitet: "10",
          pris: "600",
          utrustning: ["whiteboard", "TV"],
        },
        {
          namn: "Othello",
          kapacitet: "10",
          pris: "700",
          utrustning: ["whiteboard", "TV"],
        },
        {
          namn: "Yatzy",
          kapacitet: "5",
          pris: "400",
          utrustning: ["whiteboard", "TV"],
        },
      ],
    },
    "DOSPACE Stortorget": {
      info: {
        Sitemanager: "Elin Bogren",
        Telefonnummer: "076-770 72 72",
        Mailadress: "gavle@dospace.se",
        Adress: "Drottninggatan 18, 803 20 Gävle",
      },
      medlemskap: {
        "Hot Desk": "2300 kr/mån ex moms",
        "Private Desk": "3900 kr/mån ex moms",
        Office: "Från 3600 kr/mån/person ex moms",
      },
      rum: [
        {
          namn: "Framus",
          kapacitet: "2",
          pris: "250",
          utrustning: ["whiteboard"],
        },
        {
          namn: "Fender",
          kapacitet: "6",
          pris: "450",
          utrustning: ["whiteboard", "TV"],
        },
        {
          namn: "Gretsch",
          kapacitet: "6",
          pris: "450",
          utrustning: ["whiteboard", "TV"],
        },
        {
          namn: "Gibson",
          kapacitet: "10",
          pris: "550",
          utrustning: ["whiteboard", "TV", "webbkamera"],
        },
        {
          namn: "Rickenbacker",
          kapacitet: "12",
          pris: "600",
          utrustning: ["whiteboard", "TV", "webbkamera"],
        },
        {
          namn: "Marshall",
          kapacitet: "100",
          pris: "2,500",
          utrustning: ["whiteboard", "projektor", "ljudsystem", "mikrofon"],
        },
      ],
    },
  },
};
