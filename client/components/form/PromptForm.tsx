"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";

const PromptForm = () => {
  const router = useRouter();
  const { user } = useUser();
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setPrompt(localStorage.getItem("prompt") || "");
      localStorage.removeItem("prompt");
    }
  }, [user]);

  const handlePromptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!user) {
      const localPrompt = prompt.trim();
      if (localPrompt) {
        localStorage.setItem("prompt", localPrompt);
        router.push("/sign-in");
      }
    }
    if (prompt.trim()) {
      try {
        const result = await axios.post("/api/blog", { prompt });
        console.log(result);
        if (result.data && result.data.id) {
          router.push(`/blog/${result.data.id}`);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <Card className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              What would you like to write about?
            </h2>
            <p className="text-gray-600">
              Describe your blog idea and let our AI agents bring it to life
            </p>
          </div>
          <form onSubmit={handlePromptSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="✨ Tell me about your blog idea... "
                className="w-full h-32 p-6 bg-gray-50/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 focus:outline-none resize-none text-lg leading-relaxed"
                rows={4}
              />
              <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
                {prompt.length}/500
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {user ? (
                <Button
                  type="submit"
                  size="lg"
                  className={`bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white border-0 text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    loading ? "animate-pulse" : ""
                  }`}
                  disabled={loading}
                >
                  <Sparkles
                    className={`w-5 h-5 mr-3 ${loading ? "animate-spin" : ""}`}
                  />
                  {loading ? "Generating Blog... ✨" : "Generate My Blog"}
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              ) : (
                <Button
                  onClick={handlePromptSubmit}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white border-0 text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  Generate My Blog
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              )}
              <div className="flex items-center text-gray-600 text-sm">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                Usually takes 30-60 seconds
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptForm;
