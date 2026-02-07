"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AIAssistance() {
  const router = useRouter();
  const { data: session } = useSession();
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (session?.user?.email) {
      loadChats();
    }
  }, [session]);

  const loadChats = async () => {
    const res = await fetch("/api/ai/chats");
    const data = await res.json();
    if (data.ok && data.chats.length > 0) {
      setChats(data.chats);
      setActiveChat(data.chats[0]._id);
    } else {
      createNewChat();
    }
  };

  const saveChat = async (chatData) => {
    await fetch("/api/ai/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chatData)
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, activeChat]);

  const currentMessages = chats.find(c => c._id === activeChat)?.messages || [];

  const createNewChat = async () => {
    const newChat = {
      title: "New Chat",
      messages: [{ role: "assistant", content: "Hello! I'm your GGU Learning Assistant. How can I assist you today?" }]
    };
    const res = await fetch("/api/ai/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newChat)
    });
    const data = await res.json();
    if (data.ok) {
      setChats([...chats, data.chat]);
      setActiveChat(data.chat._id);
    }
  };

  const deleteChat = async (id) => {
    if (chats.length === 1) return;
    await fetch("/api/ai/chats", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId: id })
    });
    const filtered = chats.filter(c => c._id !== id);
    setChats(filtered);
    if (activeChat === id) setActiveChat(filtered[0]._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const currentChat = chats.find(c => c._id === activeChat);
    const updatedMessages = [...currentChat.messages, userMessage];
    const updatedTitle = currentChat.title === "New Chat" ? input.slice(0, 30) : currentChat.title;
    
    setChats(chats.map(c => c._id === activeChat ? { ...c, messages: updatedMessages, title: updatedTitle } : c));
    setInput("");
    setLoading(true);
    setStreamingContent("");

    try {
      const response = await fetch("https://lms-ai-ni2b.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: updatedMessages })
      });

      const data = await response.json();
      const fullResponse = data.response;
      
      const chars = fullResponse.split('');
      for (let i = 0; i < chars.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 30));
        setStreamingContent(chars.slice(0, i + 1).join(''));
      }
      
      const assistantMessage = { role: "assistant", content: fullResponse };
      const finalMessages = [...updatedMessages, assistantMessage];
      
      setChats(chats.map(c => c._id === activeChat ? { ...c, messages: finalMessages, title: updatedTitle } : c));
      await saveChat({ chatId: activeChat, title: updatedTitle, messages: finalMessages });
      setStreamingContent("");
    } catch (error) {
      const errorMessage = { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again." };
      setChats(chats.map(c => c._id === activeChat ? { ...c, messages: [...updatedMessages, errorMessage] } : c));
      setStreamingContent("");
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Please login to use AI Assistant</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <button onClick={() => router.push("/")} className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition mb-4">
            <img src="https://res.cloudinary.com/dwr6mvypn/image/upload/v1770459544/augmnet-removebg-preview_o6i4sh.png" alt="AI" className="w-8 h-8" />
            <span className="text-xl font-bold">AI Assistance</span>
          </button>
          <button onClick={createNewChat} className="w-full bg-gradient-to-br from-gray-100/10 to-gray-200/10 backdrop-blur-xl text-gray-900 border border-black px-4 py-2 rounded-lg hover:from-gray-200/20 hover:to-gray-300/20 transition text-sm font-medium">+ New Chat</button>
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {chats.map(chat => (
            <div key={chat._id} onClick={() => setActiveChat(chat._id)} className={`p-3 rounded-lg cursor-pointer mb-2 group hover:bg-gray-100 ${activeChat === chat._id ? 'bg-gray-100' : ''}`}>
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-800 truncate flex-1">{chat.title}</p>
                {chats.length > 1 && (
                  <button onClick={(e) => { e.stopPropagation(); deleteChat(chat._id); }} className="text-red-500 opacity-0 group-hover:opacity-100 text-xs">×</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundColor: '#FFFFFF' }}>
        <div className="bg-white border-b px-6 py-4 shadow-sm">
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {currentMessages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center flex-shrink-0 p-1">
                    <img src="https://res.cloudinary.com/dwr6mvypn/image/upload/v1770459544/augmnet-removebg-preview_o6i4sh.png" alt="AI" className="w-full h-full object-contain" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${msg.role === "user" ? "bg-gradient-to-br from-gray-100/10 to-gray-200/10 backdrop-blur-xl text-gray-900 border border-black/30 shadow-lg" : "bg-white text-gray-800 shadow-sm border"}`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full border border-black text-black flex items-center justify-center font-medium text-sm flex-shrink-0">
                    {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center flex-shrink-0 p-1">
                  <img src="https://res.cloudinary.com/dwr6mvypn/image/upload/v1770459544/augmnet-removebg-preview_o6i4sh.png" alt="AI" className="w-full h-full object-contain" />
                </div>
                <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border">
                  {streamingContent ? (
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{streamingContent}</p>
                  ) : (
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  )}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="bg-white border-t shadow-lg px-6 py-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything about your courses..." className="flex-1 border border-gray-300 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400" disabled={loading} />
              <button type="submit" disabled={loading || !input.trim()} className="bg-gradient-to-br from-gray-100/10 to-gray-200/10 backdrop-blur-xl text-gray-900 border border-black px-8 py-3 rounded-full hover:from-gray-200/20 hover:to-gray-300/20 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm">Send</button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-2">AI can make mistakes. Verify important information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
