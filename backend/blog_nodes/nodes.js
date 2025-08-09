import Replicate from "replicate";
import dotenv from "dotenv";
import { chatModel } from "../agent.js";
import { HumanMessage } from "@langchain/core/messages";
dotenv.config();
const replicate = new Replicate({
  auth: process.env.REPLICATE_KEY,
});
export const titleNode = async (state) => {
  const topicMessage = state.messages.find((m) => m._getType() === "human");
  const prompt = `Generate ONLY ONE catchy blog title for the blog topic: "${topicMessage.content}". Return ONLY the title and nothing else.`;

  const response = await chatModel.invoke([new HumanMessage(prompt)]);
  console.log("titleNode response:", response.content);

  return {
    ...state,
    messages: [...state.messages, response],
    title: response.content.trim(),
  };
};

export const contentNode = async (state) => {
  const prompt = `Write a detailed blog post for the title: "${state.title}"`;

  const response = await chatModel.invoke([new HumanMessage(prompt)]);
  console.log("contentNode response:", response.content);

  return {
    ...state,
    messages: [...state.messages, response],
    content: response.content.trim(),
  };
};

export const ImagePromptAndUrlNode = async (state) => {
  const prompt = `Generate a clean and detailed prompt for an image that visually represents the blog titled: "${state.title}". Only return plain descriptive text, no markdown or special characters.`;

  const response = await chatModel.invoke([new HumanMessage(prompt)]);
  const raw = response.content;

  const cleaned = raw
    .replace(/\*\*/g, "")
    .replace(/```/g, "")
    .replace(/\\n/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  console.log("ImagePromptAndUrlNode cleaned prompt:", cleaned);

  const StateChange = {
    ...state,
    messages: [...state.messages, response],
    imageUrlPrompt: cleaned,
  };

  const imageOutput = await replicate.run(
    "nvidia/sana-sprint-1.6b:038aee6907b53a5c148780983e39a50ce7cd0747b4e2642e78387f48cf36039a",
    {
      input: {
        seed: -1,
        width: 1024,
        height: 1024,
        prompt: StateChange.imageUrlPrompt,
        output_format: "jpg",
        guidance_scale: 4.5,
        output_quality: 80,
        inference_steps: 2,
        intermediate_timesteps: 1.3,
      },
    }
  );

  console.log("imageUrl:", imageOutput?.url());

  return {
    ...StateChange,
    imageUrl: imageOutput?.url(),
  };
};
