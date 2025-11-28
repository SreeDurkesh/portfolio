import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: "Hi! I'm an AI assistant. Ask me anything about my experience, tech stack, or leadership style." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        chatSessionRef.current = createChatSession();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = createChatSession();
      }

      const streamResult = await sendMessageStream(chatSessionRef.current, userMsg.text);
      
      const modelMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '' }]);

      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullText += text;
          setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId ? { ...msg, text: fullText } : msg
          ));
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel w-[90vw] sm:w-[400px] h-[500px] rounded-2xl flex flex-col shadow-2xl overflow-hidden mb-4 border border-slate-700 animate-slide-up">
          {/* Header */}
          <div className="bg-slate-900/80 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary-400" />
              <h3 className="font-semibold text-slate-100">AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary-500/20 text-primary-400' : 'bg-secondary-500/20 text-secondary-400'}`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-500/20 text-secondary-400 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} />
                </div>
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-900/80 border-t border-slate-700">
            <div className="flex items-center gap-2 bg-slate-800/50 p-1.5 rounded-full border border-slate-700 focus-within:border-secondary-500/50 transition-colors">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my experience..."
                className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none"
                disabled={isTyping}
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-secondary-600 hover:bg-secondary-500 text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-4 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 ${isOpen ? 'bg-slate-700 rotate-90 scale-90' : 'bg-gradient-to-r from-secondary-600 to-primary-600 hover:scale-105'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
             <MessageSquare className="w-6 h-6 text-white fill-current" />
             <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-white font-medium whitespace-nowrap">Ask AI</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;