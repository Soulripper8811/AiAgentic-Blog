import PromptForm from "@/components/form/PromptForm";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Create Amazing Blogs with
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {" "}
            AI Agents
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Transform your ideas into engaging blog posts using our advanced
          agentic AI system. Just describe what you want, and watch the magic
          happen.
        </p>

        <PromptForm />
      </div>
      workflow
    </div>
  );
};

export default DashboardPage;
