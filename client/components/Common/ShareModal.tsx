"use client";

import { useState } from "react";
import { Clipboard, Share2 } from "lucide-react";

interface ShareModalProps {
  blogId: number;
}

export default function ShareModal({ blogId }: ShareModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shareUrl = `https://ai-agentic-blog.vercel.app/blog/${blogId}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        <Share2 size={16} />
        Share
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Share this blog post
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 p-2 border border-gray-300 rounded-lg text-sm text-gray-700"
              />
              <button
                onClick={handleCopy}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Clipboard size={16} />
              </button>
            </div>
            {copied && (
              <p className="text-sm text-green-600">
                Link copied to clipboard!
              </p>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
