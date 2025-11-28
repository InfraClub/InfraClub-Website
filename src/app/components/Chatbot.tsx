"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Msg = {
  id: string;
  role: "user" | "bot" | "system";
  text: string| ReactElement;
  time?: string;
};

const BRAND = "#0b4f6c";
const ACCENT = "#f3a712";
const HIGHLIGHT = "#b45309";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      id: "s1",
      role: "system",
      text:
        "Hi — I'm Infraclub Assistant. Ask about our residential packages, vision, guarantees or request a call back.",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  // show tips above button until user opens chat for the first time
  const [hasOpened, setHasOpened] = useState<boolean>(() => {
    try {
      return typeof window !== "undefined" && localStorage.getItem("infraclub_chat_opened") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!open) return;
    // small auto-welcome (only first open)
    if (messages.length === 1) {
      setTimeout(() => {
        pushBot(
          "We deliver homes with a focus on quality, safety & timely delivery. Try: About, Plans, Contact."
        );
      }, 50);
    }
    // scroll
    listRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, messages.length]);

  function pushBot(text: string | ReactElement) {
    const msg: Msg = {
      id: cryptoRandomId(),
      role: "bot",
      text,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((s) => [...s, msg]);
    setTimeout(() => listRef.current?.scrollTo({ top: 99999, behavior: "smooth" }), 60);
  }

  function pushUser(text: string | ReactElement) {
    const msg: Msg = {
      id: cryptoRandomId(),
      role: "user",
      text,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((s) => [...s, msg]);
    setTimeout(() => {
      const lower = typeof text === "string" ? text.toLowerCase() : "";
      if (lower.includes("contact") || lower.includes("call") || lower.includes("reach") || lower.includes("whatsapp") || lower.includes("email") || lower.includes("phone")) {
        pushBot(
          <>
            Contact us:
            <div className="mt-2 space-y-2">
              <div>
                <a
                  href="https://wa.me/919449122557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-orange-400 underline inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp us
              </a>
            </div>
            <div>
              <a
                href="mailto:infraclubofficial@gmail.com"
                className="text-orange-300 hover:text-orange-400 underline inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                infraclubofficial@gmail.com
              </a>
            </div>
            <div>
              <a
                href="tel:+919449122557"
                className="text-orange-300 hover:text-orange-400 underline inline-flex items-center gap-1"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                +91 94491 22557
              </a>
            </div>
            <div className="text-gray-600 text-xs mt-1">
              Follow us: @infraclubpvtltd
            </div>
          </div>
        </>
      );
      } else if (lower.includes("about")) {
        pushBot(
          "Infraclub builds modern, durable homes with trusted materials, safety-first engineering and timely handovers."
        );
      } else if (lower.includes("vision")) {
        pushBot("Our vision: To create modern homes where families grow in harmony together.");
      } else if (lower.includes("plans") || lower.includes("pricing")) {
        pushBot(
          "We offer three packages — Basic, Standard and Premium. Ask for comparisons."
        );
      } else if (lower.includes("why") || lower.includes("choose")) {
        pushBot(
          "Why choose us: On-time delivery, tailored solutions, transparent process, quality-first and remote updates."
        );
      } else if (lower.includes("guarantee")) {
        pushBot("We guarantee 100% Work Satisfaction, 100% Quality, On-time delivery and Quick Response.");
      } else {
        pushBot("Thanks — we'll route this to our team. For quick options tap About  / Call to action.");
      }
    }, 700);
  }

  function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    pushUser(text);
  }

  // toggle open and persist first-open flag
  function toggleOpen() {
    setOpen((s) => {
      const next = !s;
      if (next) {
        try {
          localStorage.setItem("infraclub_chat_opened", "1");
        } catch {}
        setHasOpened(true);
      }
      return next;
    });
  }

  return (
    <>
      <style jsx>{`
        @keyframes pulseSpark {
          0% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.18); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.35; }
        }
        .chat-float {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 60;
        }
        
        /* Position chat window above button but maintain layout flow */
        .chat-window-wrapper {
          position: absolute;
          right: 0;
          bottom: calc(100% + 1rem); /* Position above button with gap */
          z-index: 70;
        }

        /* Keep button in place */
        .chat-button {
          position: relative;
          z-index: 60;
        }

        .tip-bubble {
          background: rgba(11,79,108,0.96);
          color: white;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          box-shadow: 0 8px 24px rgba(11,79,108,0.18);
        }
        @keyframes runningBorder {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .glow-ring {
          background: linear-gradient(90deg, ${ACCENT}, ${HIGHLIGHT});
          background-size: 200% 100%;
          animation: runningBorder 3s linear infinite;
        }
        /* small helper for inner glass */
        .glass {
          background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.7));
          backdrop-filter: blur(6px);
        }
      `}</style>

      {/* Floating button */}
      <div className="chat-float" style={{ fontFamily: 'Times New Roman, serif' }}>
        {/* animated tip shown only until user opens chat first time and when chat is closed */}
        {!open && !hasOpened && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
            className="mb-2 flex justify-end"
            aria-hidden
          >
          </motion.div>
        )}

        {/* Button wrapper */}
        <div className="chat-button">
          <button
            aria-label={open ? "Close chat" : "Open chat"}
            title={open ? "Close chat" : "Chat with Infraclub"}
            onClick={toggleOpen}
            className="relative rounded-full p-[2px] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-2xl"
            style={{
              background: `linear-gradient(90deg, ${ACCENT}, ${HIGHLIGHT}, ${ACCENT})`,
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: open ? 0.92 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-visible relative"
            >
              <span className="absolute inset-0 rounded-full opacity-20 blur-xl" style={{ background: `radial-gradient(circle at 30% 20%, ${ACCENT}, transparent 30%), radial-gradient(circle at 80% 80%, ${HIGHLIGHT}, transparent 20%)` }} />
              {/* Modern animated chat icon */}
              <motion.svg
                className="w-7 h-7 drop-shadow-sm"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.22 }}
                role="img"
              >
                <defs>
                  <linearGradient id="chatGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor={ACCENT} />
                    <stop offset="100%" stopColor={HIGHLIGHT} />
                  </linearGradient>
                </defs>

                {/* smooth bubble */}
                <path
                  d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                  fill="url(#chatGrad)"
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="0.5"
                />

                {/* subtle inner highlight */}
                <path
                  d="M6 7c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1H6V7z"
                  fill="rgba(255,255,255,0.06)"
                />

                {/* three animated dots to suggest chat */}
                <motion.g
                  initial={{ y: 0 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                  fill="white"
                  opacity="0.95"
                >
                  <motion.circle cx="9.1" cy="12.1" r="0.9" />
                  <motion.circle cx="12" cy="12.1" r="0.9" transition={{ delay: 0.12 }} />
                  <motion.circle cx="14.9" cy="12.1" r="0.9" transition={{ delay: 0.24 }} />
                </motion.g>
              </motion.svg>

              {/* pulse spark */}
              <span
                aria-hidden
                style={{ position: "absolute", right: -6, bottom: -6, width: 18, height: 18, borderRadius: 9999, background: ACCENT, boxShadow: `0 6px 20px ${ACCENT}`, animation: "pulseSpark 2.5s ease-in-out infinite" }}
              />
            </motion.div>
          </button>
        </div>

        {/* Chat window with higher z-index */}
        <AnimatePresence>
          {open && (
            <div className="chat-window-wrapper">
              <motion.aside
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1] // Smooth easing
                }}
                className="w-[320px] sm:w-[360px] rounded-2xl shadow-2xl overflow-hidden"
                style={{ boxShadow: "0 20px 40px rgba(11,79,108,0.12)", maxHeight: "70vh" }}
                role="dialog"
                aria-label="Infraclub Chat"
              >
                <div className="glass border border-orange-100/40 p-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* header icon removed as requested */}
                      <div>
                        <div className="text-sm font-semibold" style={{ color: BRAND }}>Infraclub Assistant</div>
                        <div className="text-xs text-gray-500">Residential enquiries • Quick replies</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setMessages((s) => [
                            ...s,
                            {
                              id: cryptoRandomId(),
                              role: "bot",
                              text: "Our team will contact you shortly. Please contact through whatsapp or mail us your phone number.",
                              time: new Date().toLocaleTimeString(),
                            },
                          ]);
                        }}
                        className="text-xs px-2 py-1 rounded-md border border-orange-100 text-orange-700 bg-white/60 hover:bg-white transition"
                      >
                        Request Call
                      </button>
                      <button aria-label="Close" onClick={() => setOpen(false)} className="w-8 h-8 rounded-md flex items-center justify-center hover:bg-gray-100">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3" style={{ display: "flex", flexDirection: "column", maxHeight: "calc(70vh - 72px)" }}>
                  <div ref={listRef} className="flex-1 overflow-y-auto pr-2 space-y-3">
                    <AnimatePresence initial={false}>
                      {messages.map((m) => (
                        <motion.div
                          layout
                          key={m.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                          className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} px-1`}
                        >
                          <div className={m.role === "user" ? "bg-amber-50 text-amber-900" : "bg-gray-50 text-gray-800"} style={{ maxWidth: "80%" }} >
                            <div className={`rounded-lg p-2 ${m.role === "user" ? "rounded-br-md" : "rounded-bl-md"}`}>
                              <div className="text-sm leading-relaxed">{m.text}</div>
                              <div className="text-[10px] text-gray-400 mt-1 text-right">{m.time}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* quick options */}
                  <div className="mt-1 flex flex-row gap-2 flex-wrap">
                    {["About", "Plans", "Why Us?", "Contact"].map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          pushUser(q);
                        }}
                        className="text-xs px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-amber-800 hover:scale-105 transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  {/* input */}
                  <form onSubmit={onSend} className="mt-1 flex items-center gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message... (e.g. Plans / Contact)"
                      className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-100"
                      aria-label="Message"
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 text-sm font-semibold shadow"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </motion.aside>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// tiny id helper
function cryptoRandomId() {
  try {
    return (crypto as any).randomUUID?.() ?? Math.random().toString(36).slice(2, 9);
  } catch {
    return Math.random().toString(36).slice(2, 9);
  }
}