import { db } from "@/db/drizzle";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import ShareModal from "@/components/Common/ShareModal";
import Link from "next/link";

const cleanMarkdownContent = (content: string) => {
  return content
    .split("\n")
    .filter(
      (line) =>
        !line.trim().startsWith("(Note:") &&
        !line.trim().toLowerCase().startsWith("source:")
    )
    .join("\n");
};

const BlogSinglePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const blogId = parseInt(id, 10);

  if (isNaN(blogId)) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Invalid Blog ID
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            The blog ID provided is invalid.
          </p>
        </div>
      </div>
    );
  }

  const blog = await db
    .select()
    .from(blogs)
    .where(eq(blogs.id, blogId))
    .limit(1);

  if (!blog[0]) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Blog Not Found
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const { title, imageUrl, content, createdAt, author } = blog[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Blog Image */}
        <div className="relative h-56 sm:h-96 w-full rounded-xl overflow-hidden mb-6 sm:mb-8 bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Blog Title & Meta */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-4 text-gray-600 text-xs sm:text-sm">
            <p>By {author || "John Doe"}</p>
            <p>{format(new Date(createdAt), "MMMM d, yyyy")}</p>
          </div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-gray max-w-none text-sm sm:text-base">
          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-sm border border-gray-200 overflow-x-auto">
            <ReactMarkdown>{cleanMarkdownContent(content)}</ReactMarkdown>
          </div>
        </article>

        {/* Navigation & Share */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blog"
            className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            ← Back to Blog
          </Link>
          <ShareModal blogId={blogId} />
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
