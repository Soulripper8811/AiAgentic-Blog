import { StateGraph } from "@langchain/langgraph";
import { ChatGroq } from "@langchain/groq";

import dotenv from "dotenv";
import { BlogStateSchema } from "./state/BlogState.js";
import {
  contentNode,
  ImagePromptAndUrlNode,
  titleNode,
} from "./blog_nodes/nodes.js";

dotenv.config();

export const chatModel = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "openai/gpt-oss-20b",
  streaming: false,
});

const workflow = new StateGraph(BlogStateSchema);

workflow.addNode("generate_title", titleNode);
workflow.addNode("generate_content", contentNode);
workflow.addNode("generate_image_url", ImagePromptAndUrlNode);

workflow.addEdge("__start__", "generate_title");
workflow.addEdge("generate_title", "generate_content");
workflow.addEdge("generate_content", "generate_image_url");
workflow.addEdge("generate_image_url", "__end__");

export const AiWorkFlow = workflow.compile();
