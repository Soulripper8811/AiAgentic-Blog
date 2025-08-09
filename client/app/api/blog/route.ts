import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { blogs, users } from "@/db/schema";
import { db } from "@/db/drizzle";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    const { prompt } = await req.json();
    console.log(prompt);
    if (!user || !user.primaryEmailAddress?.emailAddress) {
      return NextResponse.json(
        { error: "Unauthorized or missing email address" },
        { status: 401 }
      );
    }

    const email = user.primaryEmailAddress.emailAddress;

    const userProfile = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (userProfile.length == 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const author = userProfile[0].email.split("@")[0];
    //create new blog
    const newBlog = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/ai-blog`,
      {
        prompt,
      }
    );
    const { title, content, imageUrl } = newBlog.data;

    //save blog to db
    const insertedBlog = await db
      .insert(blogs)
      .values({
        title: title,
        content: content,
        imageUrl: imageUrl,
        userId: userProfile[0].id,
        author: author,
      })
      .returning();
    return NextResponse.json({
      id: insertedBlog[0].id,
      message: "Blog created successfully",
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
