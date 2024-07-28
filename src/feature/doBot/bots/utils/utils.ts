import { Category, City } from "../../types";

const { SOURCE_DATA } = require("../data/sourceData");

export const logCost = (response: any) => {
  const { prompt_tokens, completion_tokens } = response.data.usage;

  const prompt_cost_usd = 0.03;
  const completion_cost_usd = 0.06;

  const total_cost_usd =
    prompt_cost_usd * (prompt_tokens / 1000) +
    completion_cost_usd * (completion_tokens / 1000);
  console.log(total_cost_usd + "usd", "<-- cost");

  return total_cost_usd;
};

export const getData = (config: { city: City; category: Category }) => {
  const { city, category } = config;
  if (!city || !category) return console.log("Missing city or category");

  const source = SOURCE_DATA[city];

  let data: any = {};

  // Add sites
  for (const site of Object.keys(source)) {
    data[site] = {
      ...source[site],
      mötesrum: null,
      office: null,
    };
  }

  // Add mötesrum
  if (category === "mötesrum") {
    for (const site of Object.keys(source)) {
      data[site].mötesrum = source[site].mötesrum;
      delete data[site].office;
    }
  }

  // Add office
  if (category === "office") {
    for (const site of Object.keys(source)) {
      data[site].office = source[site].office;
      delete data[site].mötesrum;
    }
  }

  // Handle special case "id"
  if (category === "id") {
    for (const site of Object.keys(source)) {
      data[site] = { id: source[site].id };
    }
  }

  // console.log(JSON.stringify(data).length, "<--- length");

  return data;
};

export const getGeneralInfoData = () => {
  let data = { ...SOURCE_DATA };

  for (const city of Object.keys(data)) {
    for (const site of Object.keys(data[city])) {
      delete data[city][site].mötesrum;
      delete data[city][site].office;
    }
  }

  // console.log(JSON.stringify(data).length, "<--- length");

  return data;
};
