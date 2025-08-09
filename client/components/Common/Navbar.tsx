import { ArrowRight, Bot } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <nav className="border-b border-gray-200/50 backdrop-blur-sm bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <Link href="/">
              <span className="text-2xl font-bold text-gray-800">
                AgenticBlog
              </span>
            </Link>
          </div>
          {userId ? (
            <div className="flex items-center space-x-2">
              <UserButton />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                <Link href="/user-blog">UserBlog</Link>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              <Link href="/sign-in">Get Started</Link>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
