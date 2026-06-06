import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AQ.Ab8RN6K7Jkfqb5eNbPbkoLg69HgyXSUnkJO71xZS5OCxzOkHsg");

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export default model;