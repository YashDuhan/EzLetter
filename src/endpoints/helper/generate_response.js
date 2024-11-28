import dotenv from "dotenv";
import { Groq } from "groq-sdk";

dotenv.config();

// Initialize Groq API client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

function parseResponse(content) {
  return content.trim();
}

export async function generateVerdict(finalPrompt) {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: finalPrompt,
      },
    ],
    model: "llama-3.2-90b-vision-preview",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
  });

  // return the content
  return parseResponse(response.choices[0].message.content);
}
