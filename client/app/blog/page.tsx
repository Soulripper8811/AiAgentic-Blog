import { BlogCardSmall } from "@/components/Common/BlogCard";
import { db } from "@/db/drizzle";
import { blogs } from "@/db/schema";
import Link from "next/link";

export default async function BlogPage() {
  const allBlogs = await db.select().from(blogs);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, stories, and updates from our team. 🌟
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${blog.id}`} className="block">
                <BlogCardSmall blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
