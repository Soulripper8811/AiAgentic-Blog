import { Bot } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">AgenticBlog</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 AgenticBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
