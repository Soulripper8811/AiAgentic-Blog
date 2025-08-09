import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { users } from "@/db/schema";
import { db } from "@/db/drizzle";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();

    if (!user || !user.primaryEmailAddress?.emailAddress) {
      return NextResponse.json(
        { error: "Unauthorized or missing email address" },
        { status: 401 }
      );
    }

    const email = user.primaryEmailAddress.emailAddress;

    // Check if user already exists
    const existingUsers = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUsers.length > 0) {
      return NextResponse.json(existingUsers[0]);
    }

    // Insert new user
    const insertedUsers = await db
      .insert(users)
      .values({
        email: email,
        clearkId: user.id,
      })
      .returning();

    return NextResponse.json(insertedUsers[0]);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
