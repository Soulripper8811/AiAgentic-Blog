import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  Bot,
  FileText,
} from "lucide-react";
import Image from "next/image";
import PromptForm from "@/components/form/PromptForm";
import Footer from "@/components/Common/Footer";
import WorkflowExample from "@/components/Common/workflow";

export default function LandingPage() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Blog Generation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Create Amazing Blogs with
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                AI Agents
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your ideas into engaging blog posts using our advanced
              agentic AI system. Just describe what you want, and watch the
              magic happen.
            </p>

            <PromptForm />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            How AgenticBlog Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Input Prompt
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                Describe your blog topic and requirements
              </p>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                AI Processing
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                Our agents research and plan your content
              </p>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Content Creation
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                Generate high-quality, engaging blog posts
              </p>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-purple-400" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ready to Publish
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                Get your polished blog post ready for your audience
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  AI-Powered
                </h3>
                <p className="text-gray-600">
                  Advanced AI agents work together to create compelling content
                  tailored to your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-600">
                  Generate high-quality blog posts in minutes, not hours.
                  Perfect for busy content creators.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customizable
                </h3>
                <p className="text-gray-600">
                  Fine-tune tone, style, and format to match your brand and
                  audience perfectly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of creators who are already using AgenticBlog to
            scale their content.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-3"
          >
            Start Creating Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="bg-gradient-to-r from-purple-50/80 to-blue-50/80 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                How Our AI Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our intelligent workflow ensures high-quality content through
                validation and optimization
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl max-w-5xl w-full">
                <WorkflowExample />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
