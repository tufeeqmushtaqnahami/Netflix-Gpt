import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPEN_KEY } from "./Constants";

const genAI = new GoogleGenerativeAI(OPEN_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export default model;