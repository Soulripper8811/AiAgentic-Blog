import { BlogCardSmall } from "@/components/Common/BlogCard";
import { db } from "@/db/drizzle";
import { blogs } from "@/db/schema";
import Link from "next/link";

export default async function BlogPage() {
  const allBlogs = await db.select().from(blogs);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Our Blog
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest insights, stories, and updates from our team. 🌟
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {allBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${blog.id}`} className="block h-full">
                <BlogCardSmall blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
