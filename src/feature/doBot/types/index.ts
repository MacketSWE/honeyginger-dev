export type City = "Linköping" | "Jönköping" | "Norrköping" | "Gävle" | "null";
export type Category = "mötesrum" | "office" | "info" | "id";

export interface CityCategoryProp {
  city: City;
  category: Category;
}

export interface EmailData {
  site: string;
  rum: string;
  start: string;
  slut: string;
  pris: string;
  epost: string;
  faktura: string;
}
