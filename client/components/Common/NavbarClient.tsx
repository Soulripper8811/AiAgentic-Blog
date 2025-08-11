"use client";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Bot, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

const NavbarClient = ({ userId }: { userId: string | null }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200/50 backdrop-blur-sm bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {userId ? (
              <>
                <UserButton />
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  <Link href="/">Create More</Link>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant={"ghost"}>
                  <Link href="/blog">All Blogs</Link>
                </Button>
              </>
            ) : (
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                <Link href="/sign-in">Get Started</Link>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {userId ? (
              <>
                <div className="px-2">
                  <UserButton />
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href="/">Create More</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href="/blog">All Blogs</Link>
                </Button>
              </>
            ) : (
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="/sign-in">Get Started</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarClient;
