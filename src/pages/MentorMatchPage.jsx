import React, { useState } from "react";
import { MessageCircle, Code, Users, Bot, Send, CornerDownLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import PageLayout from "./PageLayout";
import MentorSurvey from "../components/MentorSurvey";

export default function MentorMatch() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSubmitted(false); // Reset submission state when selecting a new category
    if (category === 'ai-mentor') {
      setSelectedMentor('ai');
    } else {
      setShowSurvey(true);
    }
  };

  async function handleSend() {
    if (!input.trim()) return;
    console.log("Sending message:", input);
    
    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    
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
        : "Hmm, I'm not sure how to answer that.";
      const aiMsg = { sender: "ai", text: aiText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: "ai", text: "⚠️ Error: Unable to reach AI server." }]);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // If survey should be shown
  if (showSurvey) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-purple-800 p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setShowSurvey(false);
              setSelectedCategory(null);
              setSubmitted(false);
            }}
            className="mb-6 text-purple-400 hover:text-purple-300 transition"
          >
            ← Back to Mentor Selection
          </button>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedCategory === 'soft-skills' && 'Soft Skills & Confidence Mentor'}
                  {selectedCategory === 'technical' && 'Technical Mentorship'}
                  {selectedCategory === 'networking' && 'Networking & Internships Mentor'}
                </h2>
                <p className="text-gray-300 mb-6">
                  Fill out this brief survey and we'll match you with the perfect mentor for your needs.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">What are your main goals?</label>
                    <textarea
                      className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 h-32"
                      placeholder="Tell us about what you'd like to achieve..."
                    />
                  </div>
                  <button 
                    onClick={() => setSubmitted(true)}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition font-semibold"
                  >
                    Submit & Get Matched
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Successfully Submitted!</h2>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Thank you for your submission. We'll review your information and match you with a perfect mentor. 
                    You'll receive an email within 24-48 hours with next steps.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowSurvey(false);
                    setSelectedCategory(null);
                    setSubmitted(false);
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition font-semibold"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main mentor selection page
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-purple-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">MentorMatch</h1>
          <p className="text-gray-300 text-xl">
            Connect with professionals or chat with our AI mentor for on-demand guidance.
          </p>
        </div>

        {/* Category Cards */}
        {!selectedMentor && (
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            <button
              onClick={() => handleCategoryClick('soft-skills')}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all group text-center flex flex-col items-center flex-1 min-w-[250px]"
            >
              <MessageCircle className="w-16 h-16 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Soft Skills & Confidence</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Enhance your communication, leadership, and confidence to perform better in interviews and teamwork.
              </p>
            </button>

            <button
              onClick={() => handleCategoryClick('technical')}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all group text-center flex flex-col items-center flex-1 min-w-[250px]"
            >
              <Code className="w-16 h-16 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Technical Mentorship (Coding)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Get guidance on coding projects, problem-solving, and learning best practices from experienced developers.
              </p>
            </button>

            <button
              onClick={() => handleCategoryClick('networking')}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all group text-center flex flex-col items-center flex-1 min-w-[250px]"
            >
              <Users className="w-16 h-16 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Networking & Advanced Internships</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connect with professionals who can help you find internships and opportunities to grow your career.
              </p>
            </button>

            <button
              onClick={() => handleCategoryClick('ai-mentor')}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all group text-center flex flex-col items-center flex-1 min-w-[250px]"
            >
              <Bot className="w-16 h-16 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Mentor</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Prefer not to speak with a person? Chat instantly with your AI mentor for guidance and personalized advice.
              </p>
            </button>
          </div>
        )}

        {/* AI Chat Interface */}
        {selectedMentor === 'ai' && (
          <div className="mt-10 w-full max-w-4xl mx-auto">
            <button
              onClick={() => {
                setSelectedMentor(null);
                setMessages([]);
              }}
              className="mb-4 text-purple-400 hover:text-purple-300 transition"
            >
              ← Back to Mentor Selection
            </button>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
              <div className="flex flex-col h-[70vh]">
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
                        <div className="whitespace-pre-wrap">{msg.text}</div>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-xl bg-slate-700 text-gray-200">
                        <span className="animate-pulse">Thinking...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask your AI mentor..."
                    className="flex-1 bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-400"
                  />
                  <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all font-semibold disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
