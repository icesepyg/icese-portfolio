import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, Briefcase, FileText, Smile, Heart } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface QuickAction {
  label: string;
  action: 'inquiry' | 'resume' | 'hello';
  icon: React.ElementType;
}

const QUICK_ACTIONS: QuickAction[] = [
  { label: 'Start a Project', action: 'inquiry', icon: Briefcase },
  { label: 'Get Resume', action: 'resume', icon: FileText },
  { label: 'Say Hello! 👋', action: 'hello', icon: Smile },
];

const BUBBLE_MESSAGES = [
  "I'm Icese's AI Assistant! 🤖",
  "Hey! Need a creative designer? Let's chat! 🌸",
  "I can show you my resume! 📄",
  "Ask me anything about design! 🎨",
  "Start a project with me! 🚀"
];

// Helper to encode data for Netlify Form submission
const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Icese's AI Bestie. 💖\n\nI can help you schedule a call, answer questions about my design process, or show you my resume. I'm super excited to chat! 🌸" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadStep, setLeadStep] = useState<'none' | 'email' | 'details'>('none');
  const [userData, setUserData] = useState({ email: '', details: '' });
  
  // Bubble State
  const [bubbleText, setBubbleText] = useState(BUBBLE_MESSAGES[0]);
  const [showBubble, setShowBubble] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Rotating Bubble Logic
  useEffect(() => {
    // Initial showing
    const initialTimer = setTimeout(() => {
        if (!isOpen) setShowBubble(true);
    }, 2000);

    // Rotate text every 5 seconds
    const interval = setInterval(() => {
        if (!isOpen) {
             setShowBubble(false); // Fade out
             setTimeout(() => {
                 setBubbleText(prev => {
                     const idx = BUBBLE_MESSAGES.indexOf(prev);
                     return BUBBLE_MESSAGES[(idx + 1) % BUBBLE_MESSAGES.length];
                 });
                 setShowBubble(true); // Fade in
             }, 500);
        }
    }, 6000);

    return () => {
        clearTimeout(initialTimer);
        clearInterval(interval);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setShowBubble(false);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleQuickAction = (action: string) => {
    if (action === 'inquiry') {
      setMessages(prev => [...prev, 
        { role: 'user', text: "I'm interested in starting a project." },
        { role: 'model', text: "Yay! That's exciting! 🎨 I'd love to hear more. Could you please share your **email address** so Icese can get back to you?" }
      ]);
      setLeadStep('email');
    } else if (action === 'resume') {
       setMessages(prev => [...prev, 
        { role: 'user', text: "I'd like to see your resume." },
        { role: 'model', text: "Sure thing! You can view or download my full resume here:\n\n📄 **[Resume Link](https://drive.google.com/file/d/1YkQOfWxwlqwk7luG2WFSa7TEbNi-26Li/view?usp=drive_link)**\n\n✨ **[Additional Portfolio](https://drive.google.com/file/d/1HFz75pqBiAXk35kEqo5lxi3hbcKx5Fye/view?usp=drive_link)**\n\nIs there anything specific you are looking for in a candidate?" }
      ]);
    } else if (action === 'hello') {
       handleSend("Hi! Just wanted to say hello! 👋");
    }
  };

  const submitLeadToNetlify = (email: string, details: string) => {
     fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "chatbot-leads", email: email, details: details })
      })
      .then(() => console.log("Lead submitted to Netlify successfully"))
      .catch(error => console.error("Netlify form submission failed", error));
  };

  const handleSend = async (manualText?: string) => {
    const textToSend = manualText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Lead Capture Logic
    if (leadStep === 'email') {
      setUserData(prev => ({ ...prev, email: textToSend }));
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', text: "Thanks! ✨ And just briefly, what kind of project do you have in mind? (e.g. Website, Logo, Social Media)" }]);
        setLeadStep('details');
        setIsLoading(false);
      }, 800);
      return;
    }

    if (leadStep === 'details') {
      const finalDetails = textToSend;
      setUserData(prev => ({ ...prev, details: finalDetails }));
      
      // Submit to Netlify
      submitLeadToNetlify(userData.email, finalDetails);

      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', text: "Perfect! I've saved that for Icese. 📝 You'll hear back shortly! \n\nAnything else I can help with? 💖" }]);
        setLeadStep('none');
        setIsLoading(false);
      }, 1000);
      return;
    }

    // Normal Gemini Chat
    try {
      const replyText = await sendMessageToGemini(textToSend);
      setMessages(prev => [...prev, { role: 'model', text: replyText }]);
    } catch (e) {
      console.error('Portfolio assistant request failed:', e);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting right now. Please email Icese directly at icesephoonyg@gmail.com! 💌" }]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="chatbot-theme">
      {/* Creative Interactive Bubble Text - Desktop Only or carefully placed on mobile */}
      {!isOpen && (
        <div 
            className={`fixed bottom-20 right-4 z-40 hidden max-w-[200px] origin-bottom-right transition-all duration-500 md:bottom-24 md:right-8 md:block ${showBubble ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}`}
        >
           <div className="relative bg-white border-2 border-pink-100 rounded-2xl rounded-br-none p-3 md:p-4 shadow-[0_10px_30px_rgba(236,72,153,0.15)] animate-float-slow">
              <p className="font-serif italic text-gray-800 text-xs md:text-sm leading-tight text-center">
                "{bubbleText}"
              </p>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
                aria-label="Hide assistant message"
                className="absolute -top-2 -left-2 bg-gray-100 text-gray-400 rounded-full p-1 hover:bg-pink-100 hover:text-pink-500 transition-colors"
              >
                <X size={10} />
              </button>
           </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-3 md:p-4 rounded-full shadow-[0_10px_40px_rgba(236,72,153,0.3)] transition-all duration-500 hover:scale-110 interactive group ${
          isOpen ? 'rotate-90 bg-gray-900 text-white' : 'bg-gradient-to-tr from-pink-500 to-green-400 text-white'
        }`}
      >
        {/* Pulse effect ring */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full border border-pink-300 opacity-50 animate-ping pointer-events-none"></span>
        )}
        
        {isOpen ? <X size={20} /> : (
          <div className="relative">
            <MessageSquare size={20} className="md:w-6 md:h-6 fill-white/20" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-pink-500"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      <div 
        className={`
            fixed z-50 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white ring-1 ring-gray-100
            flex flex-col overflow-hidden transition-all duration-300 ease-in-out
            rounded-3xl
            ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-10 invisible'}
        `}
        style={{
            // Desktop: Fixed size
            // Mobile: Dynamic Viewport Height (dvh) to avoid address bar issues
            width: 'min(92vw, 380px)',
            height: 'min(70dvh, 600px)',
            bottom: window.innerWidth < 768 ? '4.5rem' : '6rem', 
            right: window.innerWidth < 768 ? '1rem' : '2rem'
        }}
      >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-50 to-green-50 p-4 md:p-5 border-b border-white flex items-center justify-between relative z-10 shrink-0">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center relative overflow-hidden border-2 border-pink-100 shadow-sm">
                  <Sparkles size={20} className="text-pink-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base md:text-lg text-gray-900 leading-tight">Ask about Icese’s work</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] md:text-xs text-green-600 font-bold tracking-wide">Portfolio assistant · online</span>
                  </div>
                </div>
             </div>
             <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-900 bg-white/50 p-2 rounded-full hover:bg-white transition-colors">
               <X size={18} />
             </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 md:space-y-6 bg-white bg-[radial-gradient(#fce7f3_1px,transparent_1px)] [background-size:20px_20px] overscroll-contain">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start items-end gap-2'}`}>
                {msg.role === 'model' && (
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 shadow-sm text-pink-500">
                    <Heart size={12} className="fill-pink-500" />
                  </div>
                )}
                
                <div className={`max-w-[85%] p-3 md:p-4 text-sm md:text-[15px] leading-relaxed shadow-sm ${
                  msg.role === 'model' 
                    ? 'bg-white text-gray-700 rounded-2xl rounded-bl-none border border-gray-100 font-medium' 
                    : 'bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl rounded-br-none'
                }`}>
                  {msg.text.split('\n').map((line, i) => {
                     // Simple link parsing for bold links
                     const parts = line.split(/(\[.*?\]\(.*?\))/g);
                     return (
                        <p key={i} className={line.trim() === '' ? 'h-2' : ''}>
                           {parts.map((part, j) => {
                              const match = part.match(/\[(.*?)\]\((.*?)\)/);
                              if (match) {
                                 return <a key={j} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-pink-600 underline font-bold hover:text-pink-800">{match[1]}</a>;
                              }
                              return part;
                           })}
                        </p>
                     );
                  })}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start items-end gap-2">
                 <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles size={12} className="text-pink-400 animate-spin-slow" />
                 </div>
                 <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-gray-100 text-gray-400 text-sm flex gap-1">
                   <span className="animate-bounce delay-0 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                   <span className="animate-bounce delay-100 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                   <span className="animate-bounce delay-200 w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (Lead Gen) */}
          {leadStep === 'none' && !isLoading && (
             <div className="px-4 md:px-5 pb-2 flex gap-2 overflow-x-auto no-scrollbar mask-gradient pt-2 shrink-0">
                {QUICK_ACTIONS.map(qa => (
                  <button 
                    key={qa.action}
                    onClick={() => handleQuickAction(qa.action)}
                    className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-pink-100 rounded-xl text-xs font-bold text-gray-600 hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50 transition-all whitespace-nowrap shadow-sm shrink-0"
                  >
                    <qa.icon size={12} className="text-pink-400" /> {qa.label}
                  </button>
                ))}
             </div>
          )}

          {/* Input Area */}
          <div className="p-3 md:p-4 bg-white border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2 md:px-4 md:py-2 border border-transparent focus-within:border-pink-200 focus-within:bg-white focus-within:shadow-md transition-all">
              <Heart size={16} className="text-pink-300 hidden md:block" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={leadStep === 'email' ? "Enter your email..." : "Ask about a project..."}
                className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 placeholder:text-gray-400 font-['DM_Sans'] min-w-0"
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-pink-500 to-green-500 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105 transition-all shrink-0"
              >
                <Send size={14} className="ml-0.5" />
              </button>
            </div>
            <div className="text-center mt-2 flex justify-center gap-1">
              <span className="text-[10px] text-gray-300">Powered by Gemini AI</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ChatBot;
