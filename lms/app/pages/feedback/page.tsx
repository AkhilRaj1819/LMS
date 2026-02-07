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
    <div className="min-h-screen flex" style={{ backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundColor: '#FFFFFF' }}>
      <Sidebar />
      <div className="flex-1 pt-20 px-8">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => router.back()}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition cursor-pointer"
          >
            ← Back
          </button>

          <div className="bg-white border p-8 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Feedback & Support</h1>
            <p className="text-gray-600 mb-6">
              Share your feedback or report issues anonymously. Your submission will be reviewed by admins.
            </p>

            <form onSubmit={handleSubmit}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your feedback or issue..."
                className="w-full h-48 p-4 border resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                style={{ border: '1px solid rgba(0,0,0,0.1)' }}
                required
              />

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  🔒 Anonymous submission • Auto-deletes after 90 days
                </p>
                <button
                  type="submit"
                  disabled={loading || !message.trim()}
                  className="px-8 py-3 text-gray-900 font-medium text-sm transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                  style={{
                    background: loading || !message.trim() ? '#e0e0e0' : 'linear-gradient(to bottom right, rgba(0,0,0,0.08), rgba(0,0,0,0.12))',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0,0,0,0.2)'
                  }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {success && (
              <div className="mt-4 p-4" style={{ background: 'linear-gradient(to bottom right, rgba(76,175,80,0.1), rgba(76,175,80,0.05))', border: '1px solid rgba(76,175,80,0.3)', color: '#2e7d32' }}>
                ✓ Feedback submitted successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
