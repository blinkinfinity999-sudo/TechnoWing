import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, X, Send, ChevronDown, MessageSquareText, Shield, Terminal, Zap, ArrowRight } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AiWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I'm the TechnoWing AI Assistant. How can I help you explore our forward-thinking digital solutions or promo codes today?",
      time: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    '⚡ Tell me about Fervox AI',
    '🛠️ Explore TechnoWing Services',
    '🎟️ How do I request a Promo Code?',
    '📞 Schedule a Consultation',
  ];

  const handleSend = (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText) return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      time: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // AI Response Simulation
    setTimeout(() => {
      let replyText = '';
      const lower = queryText.toLowerCase();

      if (lower.includes('fervox')) {
        replyText =
          'Fervox AI is TechnoWing\'s flagship artificial intelligence platform. It features sub-50ms latency, high-precision neural models, and intuitive web tools. You can visit the official project at https://blinkinfinity999-sudo.github.io/Fervox-ai/';
      } else if (lower.includes('service') || lower.includes('solution') || lower.includes('what we do')) {
        replyText =
          'TechnoWing specializes in Forward-Thinking Solutions including Smart AI Integration, Ultra-Light High Performance Web Tools, User-Centric Design, and Enterprise Software Architecture.';
      } else if (lower.includes('promo') || lower.includes('code')) {
        replyText =
          'You can request exclusive promo codes right here in our "How Can We Help You" support section on the homepage! Submit your email and request type to get priority access keys.';
      } else if (lower.includes('consultation') || lower.includes('contact') || lower.includes('book')) {
        replyText =
          'Our strategic advisors are ready to collaborate! Click the "Consultation" button in the top navigation bar or submit a message in our Contact section to book a meeting.';
      } else {
        replyText =
          `Thanks for reaching out! Regarding "${queryText}": TechnoWing builds tailored AI-driven digital ecosystems. Feel free to explore our Services section or drop a request in our Support Portal!`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 border border-cyan-400/30 group"
          aria-label="Open TechnoWing AI Assistant"
        >
          {/* Outer rotating/pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-300/30 scale-105 group-hover:scale-110 transition-all duration-500 animate-pulse opacity-70" />
          
          {/* Inner Image (Circular Only) */}
          <div className="w-full h-full rounded-full overflow-hidden border border-black/20 relative">
            <img
              src="/images/technowing_logo.png"
              alt="TechnoWing AI"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80';
              }}
            />
            {/* Live active glow pulse overlay */}
            <span className="absolute bottom-0.5 right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300 border border-slate-950" />
            </span>
          </div>
        </button>
      )}

      {/* Expanded AI Chat Widget Panel */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] rounded-3xl bg-[#090a10]/95 border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 animate-in fade-in zoom-in-95 slide-in-from-bottom-12">
          
          {/* Panel Header */}
          <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-cyan-500/30 flex items-center justify-center bg-[#090a10] shadow-[0_0_12px_rgba(34,211,238,0.3)]">
                <img
                  src="/images/technowing_logo.png"
                  alt="TechnoWing Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white tracking-wide">TechnoWing AI Assistant</h4>
                  <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    LIVE
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-mono">Forward-Thinking Support</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close widget"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                      : 'bg-white/10 border border-white/10 text-gray-100 rounded-tl-none backdrop-blur-md'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] font-mono text-gray-500 mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono p-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>TechnoWing AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="p-2 border-t border-white/10 bg-black/20 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt.replace(/^[^a-zA-Z0-9]+/, ''))}
                className="whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 text-[11px] font-mono transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-white/10 bg-black/40">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask TechnoWing AI anything..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 text-slate-950 transition-all shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};
