"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { format } from "date-fns";
import { Blog } from "@/types/types";

interface BlogCardSmallProps {
  blog: Blog;
}

export function BlogCardSmall({ blog }: BlogCardSmallProps) {
  return (
    <Card className=" w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-48 w-full group">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60 group-hover:backdrop-blur-sm" />
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <p className="text-sm text-white font-medium tracking-wide bg-black/50 px-2 py-1 rounded-full">
            {format(new Date(blog.createdAt), "MMM d, yyyy")}
          </p>
          <span className="text-sm text-white font-medium bg-blue-600 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore
          </span>
        </div>
      </div>
      <CardHeader className="p-5">
        <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight hover:text-blue-700 transition-colors duration-300">
          {blog.title}
        </CardTitle>
        <p className="text-sm text-gray-600 font-medium mt-2 flex items-center gap-2">
          By {blog.author || "John Doe"} 🖋️
        </p>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
          {blog.content}
        </p>
        <a
          href={`/blog/${blog.id}`}
          className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 underline underline-offset-4"
        >
          Read More →
        </a>
      </CardContent>
    </Card>
  );
}
