import OpenAI from "openai";
import { GPT_SECRET_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: GPT_SECRET_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
