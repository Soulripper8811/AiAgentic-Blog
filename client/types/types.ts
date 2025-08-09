import { InferModel } from "drizzle-orm";
import { blogs } from "@/db/schema";

export type Blog = InferModel<typeof blogs>; // full row type
export type NewBlog = InferModel<typeof blogs, "insert">; // for inserting
