import React, { useState } from "react";
import { MessageCircle, Code, Users, Bot, Send, CornerDownLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import PageLayout from "./PageLayout";

export default function MentorMatch() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  // State for the chat functionality
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const mentors = [
    {
      id: "softskills",
      title: "Soft Skills & Confidence",
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      description:
        "Enhance your communication, leadership, and confidence to perform better in interviews and teamwork.",
      link: "#softskills",
    },
    {
      id: "technical",
      title: "Technical Mentorship (Coding)",
      icon: <Code className="w-8 h-8 text-purple-500" />,
      description:
        "Get guidance on coding projects, problem-solving, and learning best practices from experienced developers.",
      link: "#technical",
    },
    {
      id: "networking",
      title: "Networking & Advanced Internships",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      description:
        "Connect with professionals who can help you find internships and opportunities to grow your career.",
      link: "#networking",
    },
    {
      id: "ai",
      title: "AI Mentor",
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      description:
        "Prefer not to speak with a person? Chat instantly with your AI mentor for guidance and personalized advice.",
      link: "#ai",
    },
  ];

  async function handleSend () {
  if (!input.trim()) return
  console.log("Sending message:", input)
    const userMsg = { sender: "user", text: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { 
              role: "system", 
              content: "You are an AI Mentor for 'Beyond The Code', a platform for people entering the tech industry without a traditional degree. Your tone is encouraging, knowledgeable, and supportive. You provide advice on soft skills, technical topics, and networking. Put a header and then bullet points of the best ways to reach that goal, then at the end ask if the user needs anymore assistance." 
            },
            { role: "user", content: input }
          ]
        })
      });
      const data = await response.json();
      const aiText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
        ? data.choices[0].message.content.trim()
        : "Hmm, I’m not sure how to answer that.";
      const aiMsg = { sender: "ai", text: aiText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { sender: "ai", text: ":warning: Error: Unable to reach AI server." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout
      title="MentorMatch"
      subtitle="Connect with professionals or chat with our AI mentor for on-demand guidance."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            onClick={() => setSelectedMentor(mentor.id)}
            className={`cursor-pointer bg-white border-2 rounded-2xl p-6 text-center transition-all duration-300 ${
              selectedMentor === mentor.id
                ? "border-purple-400 shadow-lg shadow-purple-600/40 scale-105"
                : "border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
            }`}
          >
            <div className="flex justify-center mb-4">{mentor.icon}</div>
            <h2 className="text-xl font-semibold text-white mb-2">{mentor.title}</h2>
            <p className="text-gray-300 text-sm">{mentor.description}</p>
          </div>
        ))}
      </div>

      {selectedMentor && (
        <div className="mt-10 w-full max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
          {selectedMentor === "ai" ? (
            <div className="flex flex-col h-[60vh]">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">Chat with your AI Mentor</h3>
              
              {/* Message Display Area */}
              <div className="flex-1 space-y-4 overflow-y-auto p-4 bg-slate-900/50 rounded-lg border border-purple-500/20">
                {messages.length === 0 && (
                  <div className="text-center text-gray-400 h-full flex items-center justify-center">
                    Ask something like, "How can I prepare for a technical interview?"
                  </div>
                )}
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-lg px-4 py-2 rounded-xl ${msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-gray-200'}`}>
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="px-4 py-2 rounded-xl bg-slate-700 text-gray-200">
                      <span className="animate-pulse">...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask your AI mentor..."
                  className="flex-1 bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-400"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all font-semibold disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Connect with a {mentors.find((m) => m.id === selectedMentor)?.title}
              </h3>
              <p className="text-gray-300 mb-4">
                You’ll be matched with a verified mentor specializing in {mentors.find((m) => m.id === selectedMentor)?.title.toLowerCase()}.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
                Request Mentor
              </button>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
}
