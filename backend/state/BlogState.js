import { z } from "zod";
export const BlogStateSchema = z.object({
  messages: z.array(z.any()),
  title: z.string().optional(),
  content: z.string().optional(),
  imageUrlPrompt: z.string().optional(),
  imageUrl: z.string().optional(),
});
