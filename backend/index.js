import express from "express";
import { AiWorkFlow } from "./agent.js";
import { HumanMessage } from "@langchain/core/messages";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/ai-blog", async (req, res) => {
  const { prompt } = req.body;
  const { title, content, imageUrlPrompt, imageUrl } = await AiWorkFlow.invoke({
    messages: [new HumanMessage(prompt)],
  });

  res.send({
    title,
    content,
    imageUrl,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
