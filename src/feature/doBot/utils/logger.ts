const isDev = process.env.NODE_ENV === "development";

export const consoleLog = (message: string, logInProd: boolean = false) => {
  if (isDev || logInProd) {
    console.log(message);
  }
};
