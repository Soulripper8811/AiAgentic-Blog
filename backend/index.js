import express from "express";
import { AiWorkFlow } from "./agent.js";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";
import cors from "cors";
import keepStart from "./cron/keep-start.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/check", (req, res) => {
  res.json({ message: "test check" });
});
app.post("/api/ai-blog", async (req, res) => {
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

keepStart();
app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
