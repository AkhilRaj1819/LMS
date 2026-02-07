"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setSuccess(true);
        setMessage("");
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar />
      <div className="flex-1 pt-20 px-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => router.back()}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back
          </button>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-2">Feedback & Support</h1>
            <p className="text-gray-600 mb-6">
              Share your feedback or report issues anonymously. Your submission will be reviewed by admins.
            </p>

            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your feedback or issue..."
                className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                required
              />

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  🔒 Anonymous submission • Auto-deletes after 90 days
                </p>
                <button
                  type="submit"
                  disabled={loading || !message.trim()}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {success && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                ✓ Feedback submitted successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
