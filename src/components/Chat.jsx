import React, { useState } from 'react';
import { getChatCompletion } from '../chatgpt';
import ReactMarkdown from 'react-markdown';

function Chat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;

    setIsLoading(true);
    setResponse('');
    try {
      const result = await getChatCompletion(prompt);
      setResponse(result);
    } catch (error) {
      console.error("Error fetching chat completion:", error);
      setResponse('Sorry, something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-slate-800 text-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
          className="w-full p-2 rounded bg-slate-700 border border-slate-600"
        />
        <button type="submit" disabled={isLoading} className="mt-2 p-2 bg-purple-600 rounded hover:bg-purple-700 disabled:bg-slate-500">
          {isLoading ? 'Thinking...' : 'Send'}
        </button>
      </form>
      {response && <div className="mt-4 p-4 bg-slate-700 rounded"><ReactMarkdown>{response}</ReactMarkdown></div>}
    </div>
  );
}

export default Chat;