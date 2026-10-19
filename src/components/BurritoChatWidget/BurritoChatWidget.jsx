import React, { useState, useRef, useEffect } from "react";
import "./BurritoChatWidget.css";
import burritoImg from "../../assets/image.png";

const KNOWLEDGE_BASE = [
  {
    keywords: ["who", "mark", "jayson", "alicman", "about", "bio", "background", "developer"],
    reply: `**Mark Jayson Alicman** is a Full-Stack Software Engineer & AI Systems Developer based in Naic, Cavite, Philippines. 

🏆 **Highlights:**
• Tech Lead & Head Developer for GEAHM Hospital Information Systems
• Project Leader for Biometric Face Recognition Incident Profiling (Python)
• Top 3 Python Programmer Award (CvSU Trece Martires)
• Sole Campus Finalist in Top 15 C++ Programming Competition
• Top 5 National Finalist in eGov Philippines Hackathon 2026 (Team DevOops)`,
  },
  {
    keywords: ["skill", "stack", "tech", "languages", "frontend", "backend", "python", "react"],
    reply: `Here are Mark Jayson's core technical specialties:

⚡ **Languages:** Python, JavaScript (ES6+), C++, Java, C, SQL
🎨 **Frontend:** React.js, GSAP Animations, Tailwind CSS, HTML5/CSS3, Responsive UI
⚙️ **Backend:** ASP.NET, .NET Framework, Laravel, CodeIgniter, REST APIs, MySQL, SQLite
🤖 **AI & Vision:** Multi-Model LLMs, Computer Vision (OpenCV), Biometric Recognition
🔌 **Infrastructure:** LAN Routing, Cisco/Managed Switches, IT Hardware Diagnostics`,
  },
  {
    keywords: ["burrito", "ai", "chatbot", "assistant", "model", "streaming", "dictation"],
    reply: `🌯 **Burrito AI — Intelligent Multi-Model Assistant** is a web application created by Mark Jayson!

✨ **Key Features:**
• Multi-model LLM workspace (GPT-4o, Claude 3.5 Sonnet, Gemini Pro, Llama 3)
• Real-time token streaming completions
• Syntax-highlighted code blocks with copy support
• Voice dictation & speech-to-text input
• Dynamic dark/light theme switching

👉 [**Click here to launch Burrito AI**](https://burritoai.vercel.app/)`,
  },
  {
    keywords: ["project", "projects", "lilyanz", "ecommerce", "work", "portfolio", "built"],
    reply: `Mark Jayson has engineered 10+ production and enterprise systems:

1. 🌯 **Burrito AI:** Multi-model intelligent AI workspace with streaming & voice dictation ([Live Demo](https://burritoai.vercel.app/))
2. 🛒 **Lilyanz Hardware E-Commerce:** Production e-commerce platform with real-time catalog & cart ([Live Demo](https://lilyanz-ecom.vercel.app/))
3. 🔍 **Incident Profiling with Face Recognition:** High-accuracy biometric safety system built natively in Python
4. 🏥 **GEAHM Hospital Systems:** Patient Queuing, HRIS, and Exit Clearance modules
5. 😊 **Mood Detection System:** Client-side real-time emotion inference web app`,
  },
  {
    keywords: ["experience", "hospital", "ojt", "geahm", "work experience", "lead"],
    reply: `🏥 **GEAHM Hospital Internship — Tech Lead & Head Developer**

• Led the engineering of hospital-wide clinical applications (Queue Management, HRIS, Digital Clearance).
• Coordinated directly with clinical department heads to digitize paper workflows and cut patient wait times.
• Handled enterprise network infrastructure: LAN cabling, subnet routing, managed switches, and IT support.`,
  },
  {
    keywords: ["contact", "email", "phone", "hire", "telegram", "facebook", "reach", "message"],
    reply: `Get in touch with Mark Jayson directly:

✉️ **Email:** jaysonman790@gmail.com
📱 **Phone / SMS:** +63 981 195 4487
✈️ **Telegram:** [@markjaysonalicman](https://t.me/markjaysonalicman)
👤 **Facebook:** [Mark Jayson Alicman](https://www.facebook.com/mark.jayson.alicman)
📍 **Location:** Sabang, Naic, Cavite, Philippines`,
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: `👋 Hey there! I'm **Burrito AI**, an intelligent assistant created by **Mark Jayson Alicman**.

I can answer questions about his software projects, technical skills, hospital tech leadership, or you can launch my full multi-model AI workspace!`,
    time: "Just now",
  },
];

const SUGGESTED_PROMPTS = [
  "🌯 Tell me about Burrito AI",
  "⚡ What are Mark Jayson's skills?",
  "🚀 Show his live projects",
  "🏥 Tell me about his Hospital OJT",
  "✉️ How can I contact him?",
];

export default function BurritoChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate intelligent thinking & response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedReply = null;

      for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedReply = item.reply;
          break;
        }
      }

      if (!matchedReply) {
        matchedReply = `I'd love to help with that! Mark Jayson specializes in Full-Stack Web Development (React, ASP.NET, MySQL), Python AI / Computer Vision, and Cloud deployments.

You can try the suggested prompts below, reach out to him at **jaysonman790@gmail.com**, or test the full multi-model capabilities on [**Burrito AI**](https://burritoai.vercel.app/)!`;
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: matchedReply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to render markdown-like bold and links
  const renderFormattedText = (raw) => {
    const lines = raw.split("\n");
    return lines.map((line, lIdx) => {
      // Process markdown links [text](url)
      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="burrito-inline-link"
          >
            {match[1]} ↗
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      // Process bold **text** in string parts
      const processedParts = parts.map((part, pIdx) => {
        if (typeof part !== "string") return part;
        const boldRegex = /\*\*(.*?)\*\*/g;
        const boldParts = [];
        let bLast = 0;
        let bMatch;

        while ((bMatch = boldRegex.exec(part)) !== null) {
          if (bMatch.index > bLast) {
            boldParts.push(part.substring(bLast, bMatch.index));
          }
          boldParts.push(<strong key={bMatch.index}>{bMatch[1]}</strong>);
          bLast = bMatch.index + bMatch[0].length;
        }
        if (bLast < part.length) {
          boldParts.push(part.substring(bLast));
        }
        return <span key={pIdx}>{boldParts}</span>;
      });

      return (
        <span key={lIdx} className="burrito-msg-line">
          {processedParts}
          {lIdx < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="burrito-widget-container">
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <button
          className="burrito-trigger-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Burrito AI Chatbot"
        >
          <span className="burrito-pulse-ring"></span>
          <span className="burrito-trigger-thumb-wrap">
            <img src={burritoImg} alt="Burrito AI" className="burrito-trigger-thumb" />
          </span>
          <span className="burrito-trigger-text">
            <strong>Burrito AI</strong>
            <span className="burrito-trigger-badge">Live Chat</span>
          </span>
          <span className="burrito-status-dot"></span>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="burrito-chat-window" role="dialog" aria-label="Burrito AI Chat Window">
          {/* Header */}
          <div className="burrito-chat-header">
            <div className="burrito-header-info">
              <div className="burrito-avatar">
                <img src={burritoImg} alt="Burrito AI" className="burrito-avatar-img" />
                <span className="burrito-avatar-pulse"></span>
              </div>
              <div>
                <div className="burrito-header-title-row">
                  <h4 className="burrito-header-title">Burrito AI</h4>
                  <span className="burrito-tag-live">LIVE</span>
                </div>
                <p className="burrito-header-sub">Intelligent Multi-Model Assistant</p>
              </div>
            </div>

            <div className="burrito-header-actions">
              <a
                href="https://burritoai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="burrito-launch-btn"
                title="Launch Full Burrito AI Workspace"
              >
                <span>Full App</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <button
                className="burrito-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Quick Notice Banner with UI Preview */}
          <div className="burrito-banner">
            <span>✨ Made by <strong>Mark Jayson Alicman</strong> · Multi-Model AI</span>
            <a
              href="https://burritoai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="burrito-banner-link"
            >
              Try Vercel App ↗
            </a>
          </div>

          <a
            href="https://burritoai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="burrito-app-snapshot-card"
            title="Open Burrito AI Web App"
          >
            <img src={burritoImg} alt="Burrito AI Live App" className="burrito-snapshot-img" />
            <div className="burrito-snapshot-overlay">
              <span className="burrito-snapshot-btn">
                <span className="live-dot-pulse"></span>
                <span>Launch Live Workspace (burritoai.vercel.app) ↗</span>
              </span>
            </div>
          </a>

          {/* Messages Area */}
          <div className="burrito-messages-area">
            {messages.map((msg) => (
              <div key={msg.id} className={`burrito-msg-row ${msg.sender}`}>
                {msg.sender === "bot" && <div className="burrito-bot-mini-avatar">🌯</div>}
                <div className={`burrito-msg-bubble ${msg.sender}`}>
                  <div className="burrito-msg-content">{renderFormattedText(msg.text)}</div>
                  <span className="burrito-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="burrito-msg-row bot">
                <div className="burrito-bot-mini-avatar">🌯</div>
                <div className="burrito-msg-bubble bot typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          <div className="burrito-prompts-row">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                className="burrito-prompt-chip"
                onClick={() => handleSend(prompt.replace(/^🌯 |^⚡ |^🚀 |^🏥 |^✉️ /, ""))}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="burrito-input-area">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Burrito AI about Mark Jayson..."
              className="burrito-text-input"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="burrito-send-btn"
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
