"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrices = void 0;
const fullDay = [
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 4000,
        quantity: 1,
        name: "Aktivitetsyta Alfa, 4.000,00 kr, 1 x 4.000,00 kr / day - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "5f31141fb2e6a100935a4fbc",
        planType: "ResourceRate",
        formattedPrice: "1 x 4.000,00 kr / day",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 13000,
        quantity: 1,
        name: "Hörsal Konfen, 13.000,00 kr, 1 x 13.000,00 kr / day - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6179291b3af7d1a2821298bb",
        planType: "ResourceRate",
        formattedPrice: "1 x 13.000,00 kr / day",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 3600,
        quantity: 1,
        name: "Mötesrum Medium, 3.600,00 kr, 1 x 3.600,00 kr / day - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6361152bf478e4d5f87659e3",
        planType: "ResourceRate",
        formattedPrice: "1 x 3.600,00 kr / day",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 6300,
        quantity: 1,
        name: "Priskategori 14, 6.300,00 kr, 1 x 6.300,00 kr / day - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598afa8d78b6bd8ab9818",
        planType: "ResourceRate",
        formattedPrice: "1 x 6.300,00 kr / day",
    },
];
const customHalfDay = [
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 3920,
        quantity: 1,
        name: "Priskategori 12, 3.920,00 kr, 1 x 2.720,00 kr / half day, 1.5 x 800,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598788cf32added266cd0",
        planType: "ResourceRate",
        formattedPrice: "1 x 2.720,00 kr / half day, 1.5 x 800,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 2940,
        quantity: 1,
        name: "Priskategori 9, 2.940,00 kr, 1 x 2.040,00 kr / half day, 1.5 x 600,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598258cf32a7ed12668e3",
        planType: "ResourceRate",
        formattedPrice: "1 x 2.040,00 kr / half day, 1.5 x 600,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 1960,
        quantity: 1,
        name: "Priskategori 5, 1.960,00 kr, 1 x 1.360,00 kr / half day, 1.5 x 400,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6475978ff88f3b08fdc128f8",
        planType: "ResourceRate",
        formattedPrice: "1 x 1.360,00 kr / half day, 1.5 x 400,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 1715,
        quantity: 1,
        name: "Priskategori 4, 1.715,00 kr, 1 x 1.190,00 kr / half day, 1.5 x 350,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "64759775bad6d6dc2b6108c9",
        planType: "ResourceRate",
        formattedPrice: "1 x 1.190,00 kr / half day, 1.5 x 350,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 1960,
        quantity: 1,
        name: "Priskategori 5, 1.960,00 kr, 1 x 1.360,00 kr / half day, 1.5 x 400,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6475978ff88f3b08fdc128f8",
        planType: "ResourceRate",
        formattedPrice: "1 x 1.360,00 kr / half day, 1.5 x 400,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 1960,
        quantity: 1,
        name: "Priskategori 5, 1.960,00 kr, 1 x 1.360,00 kr / half day, 1.5 x 400,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6475978ff88f3b08fdc128f8",
        planType: "ResourceRate",
        formattedPrice: "1 x 1.360,00 kr / half day, 1.5 x 400,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 4900,
        quantity: 1,
        name: "Priskategori 14, 4.900,00 kr, 1 x 3.400,00 kr / half day, 1.5 x 1.000,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598afa8d78b6bd8ab9818",
        planType: "ResourceRate",
        formattedPrice: "1 x 3.400,00 kr / half day, 1.5 x 1.000,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 500,
        quantity: 6,
        name: "Mötesrum Konfen, 3.000,00 kr, 6 x 500,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "617928d13af7d1d4ad12973c",
        planType: "ResourceRate",
        formattedPrice: "6 x 500,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 2900,
        quantity: 1,
        name: "Mötesrum Medium, 2.900,00 kr, 1 x 2.000,00 kr / half day, 1.5 x 600,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6361152bf478e4d5f87659e3",
        planType: "ResourceRate",
        formattedPrice: "1 x 2.000,00 kr / half day, 1.5 x 600,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 4000,
        quantity: 1,
        name: "Aktivitetsyta Alfa, 4.000,00 kr, 1 x 4.000,00 kr / day - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "5f31141fb2e6a100935a4fbc",
        planType: "ResourceRate",
        formattedPrice: "1 x 4.000,00 kr / day",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 13000,
        quantity: 1,
        name: "Hörsal Konfen, 13.000,00 kr, 1 x 13.000,00 kr / day - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6179291b3af7d1a2821298bb",
        planType: "ResourceRate",
        formattedPrice: "1 x 13.000,00 kr / day",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 2900,
        quantity: 1,
        name: "Mötesrum Medium, 2.900,00 kr, 1 x 2.000,00 kr / half day, 1.5 x 600,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6361152bf478e4d5f87659e3",
        planType: "ResourceRate",
        formattedPrice: "1 x 2.000,00 kr / half day, 1.5 x 600,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 4900,
        quantity: 1,
        name: "Priskategori 14, 4.900,00 kr, 1 x 3.400,00 kr / half day, 1.5 x 1.000,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598afa8d78b6bd8ab9818",
        planType: "ResourceRate",
        formattedPrice: "1 x 3.400,00 kr / half day, 1.5 x 1.000,00 kr / hour",
    },
];
const twoHours = [
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 5000,
        quantity: 2,
        name: "Hörsal Konfen, 10.000,00 kr, 2 x 5.000,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6179291b3af7d1a2821298bb",
        planType: "ResourceRate",
        formattedPrice: "2 x 5.000,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 600,
        quantity: 2,
        name: "Mötesrum Medium, 1.200,00 kr, 2 x 600,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6361152bf478e4d5f87659e3",
        planType: "ResourceRate",
        formattedPrice: "2 x 600,00 kr / hour",
    },
    {
        date: "2023-11-06T00:00:00.000Z",
        price: 1000,
        quantity: 2,
        name: "Priskategori 14, 2.000,00 kr, 2 x 1.000,00 kr / hour - Nov 6, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598afa8d78b6bd8ab9818",
        planType: "ResourceRate",
        formattedPrice: "2 x 1.000,00 kr / hour",
    },
];
const nonWorkingDay = [
    {
        date: "2023-11-05T00:00:00.000Z",
        price: 210,
        quantity: 1,
        name: "Aktivitetsyta Alfa, 210,00 kr, 1 x 210,00 kr / non-business hour - Nov 5, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "5f31141fb2e6a100935a4fbc",
        planType: "ResourceRate",
        formattedPrice: "1 x 210,00 kr / non-business hour",
    },
    {
        date: "2023-11-05T00:00:00.000Z",
        price: 5000,
        quantity: 1,
        name: "Hörsal Konfen, 5.000,00 kr, 1 x 5.000,00 kr / hour - Nov 5, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6179291b3af7d1a2821298bb",
        planType: "ResourceRate",
        formattedPrice: "1 x 5.000,00 kr / hour",
    },
    {
        date: "2023-11-05T00:00:00.000Z",
        price: 180,
        quantity: 1,
        name: "Mötesrum Medium, 180,00 kr, 1 x 180,00 kr / non-business hour - Nov 5, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "6361152bf478e4d5f87659e3",
        planType: "ResourceRate",
        formattedPrice: "1 x 180,00 kr / non-business hour",
    },
    {
        date: "2023-11-05T00:00:00.000Z",
        price: 300,
        quantity: 1,
        name: "Priskategori 14, 300,00 kr, 1 x 300,00 kr / non-business hour - Nov 5, 2023",
        office: "5e3964598c9bf6020d8f6b6d",
        plan: "647598afa8d78b6bd8ab9818",
        planType: "ResourceRate",
        formattedPrice: "1 x 300,00 kr / non-business hour",
    },
];
const allPrices = [
    ...fullDay,
    ...customHalfDay,
    ...twoHours,
    ...nonWorkingDay,
];
const generatePrices = () => {
    for (const price of allPrices) {
        let noSEK = price.formattedPrice;
        while (noSEK.includes("kr")) {
            noSEK = noSEK.replace(",00 kr", "");
        }
        const splitPrices = noSEK.split(",");
        let subPrices = [];
        for (const price of splitPrices) {
            const trimmedPrice = price.trim();
            const parts = trimmedPrice.split(" ");
            const calculated = Number(parts[0]) * Number(parts[2].replace(".", ""));
            var printPrice = trimmedPrice.replace("half day", "halvdag");
            printPrice = printPrice.replace("non-business hour", "timme utanför kontorstid");
            printPrice = printPrice.replace("day", "dag");
            printPrice = printPrice.replace("hour", "timme");
            console.log(printPrice);
            subPrices.push(calculated);
        }
        const total = subPrices.reduce((a, b) => a + b, 0);
        console.log(total, "<-- total");
        console.log(" ");
    }
};
exports.generatePrices = generatePrices;
