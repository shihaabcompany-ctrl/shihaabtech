"use client";

import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

type AssistantAction = {
  href: string;
  label: string;
};

type AssistantMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  actions?: AssistantAction[];
};

const initialMessages: AssistantMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hi, I am the Shihaab Tech Project Assistant. Tell me what you want to build, or choose a quick option below.",
    actions: [
      { label: "View services", href: "/services" },
      { label: "Start brief", href: "/contact" },
    ],
  },
];

const quickPrompts = [
  "I need a premium website",
  "I want an app or dashboard",
  "I need automation",
  "Show project proof",
];

function createAssistantReply(input: string, id: number): AssistantMessage {
  const text = input.toLowerCase();

  if (text.includes("website") || text.includes("landing") || text.includes("site")) {
    return {
      id,
      role: "assistant",
      text: "For a premium website, the best path is usually a focused launch site first: clear offer, strong visuals, service sections, trust proof, contact form, SEO, and responsive polish.",
      actions: [
        { label: "Website services", href: "/services" },
        { label: "Send website brief", href: "/contact" },
      ],
    };
  }

  if (
    text.includes("app") ||
    text.includes("dashboard") ||
    text.includes("portal") ||
    text.includes("saas")
  ) {
    return {
      id,
      role: "assistant",
      text: "For an app, dashboard, or SaaS MVP, Shihaab Tech can shape login, roles, database structure, admin screens, workflows, and deployment into a practical first version.",
      actions: [
        { label: "See services", href: "/services" },
        { label: "Discuss MVP", href: "/contact" },
      ],
    };
  }

  if (
    text.includes("automation") ||
    text.includes("whatsapp") ||
    text.includes("sms") ||
    text.includes("email") ||
    text.includes("workflow")
  ) {
    return {
      id,
      role: "assistant",
      text: "For automation, the first step is mapping the repeated work: contacts, channels, messages, approvals, schedules, logs, and what should happen automatically.",
      actions: [
        { label: "View Zyrelo case", href: "/work/zyrelo" },
        { label: "Plan automation", href: "/contact" },
      ],
    };
  }

  if (
    text.includes("project") ||
    text.includes("work") ||
    text.includes("case") ||
    text.includes("proof") ||
    text.includes("portfolio")
  ) {
    return {
      id,
      role: "assistant",
      text: "Good idea. The projects page shows the Rozaliya business platform and Zyrelo automation product, with case studies explaining the business value behind each build.",
      actions: [
        { label: "View projects", href: "/projects" },
        { label: "Rozaliya case", href: "/work/rozaliya" },
      ],
    };
  }

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("budget") ||
    text.includes("timeline") ||
    text.includes("time")
  ) {
    return {
      id,
      role: "assistant",
      text: "Timeline and cost depend on scope: pages, backend, forms, integrations, admin tools, and launch needs. The fastest next step is a short project brief.",
      actions: [
        { label: "Send project brief", href: "/contact" },
        { label: "Compare services", href: "/services" },
      ],
    };
  }

  return {
    id,
    role: "assistant",
    text: "That sounds like something we can shape. Share the goal, target users, must-have features, timeline, and any existing brand assets. The contact page is the best next step.",
    actions: [
      { label: "Start contact form", href: "/contact" },
      { label: "Explore services", href: "/services" },
    ],
  };
}

export function ProjectAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);
  const nextMessageId = useRef(2);

  function sendMessage(value: string) {
    const cleanValue = value.trim();

    if (!cleanValue) {
      return;
    }

    const userMessageId = nextMessageId.current;
    const assistantMessageId = nextMessageId.current + 1;
    nextMessageId.current += 2;

    const userMessage: AssistantMessage = {
      id: userMessageId,
      role: "user",
      text: cleanValue,
    };

    setMessages((current) => [
      ...current,
      userMessage,
      createAssistantReply(cleanValue, assistantMessageId),
    ]);
    setInput("");
    setIsOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <aside className={`project-assistant ${isOpen ? "is-open" : ""}`} aria-label="Project Assistant">
      <button
        className="assistant-launcher"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Project Assistant" : "Open Project Assistant"}
      >
        <span className="assistant-launcher-glow" aria-hidden="true" />
        <Image
          src="/brand/shihaab-tech-premium-v2-mark.svg"
          alt=""
          width={36}
          height={36}
        />
        <MessageCircle aria-hidden="true" size={18} />
      </button>

      <section className="assistant-panel" aria-hidden={!isOpen}>
        <div className="assistant-header">
          <div className="assistant-header-mark">
            <Image
              src="/brand/shihaab-tech-premium-v2-mark.svg"
              alt=""
              width={42}
              height={42}
            />
          </div>
          <div>
            <span>Shihaab Tech</span>
            <strong>Project Assistant</strong>
          </div>
          <button
            type="button"
            className="assistant-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close Project Assistant"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>

        <div className="assistant-messages">
          {messages.map((message) => (
            <div className={`assistant-message ${message.role}`} key={message.id}>
              {message.role === "assistant" && (
                <span className="assistant-message-icon" aria-hidden="true">
                  <Bot size={15} />
                </span>
              )}
              <div>
                <p>{message.text}</p>
                {message.actions && (
                  <div className="assistant-actions">
                    {message.actions.map((action) => (
                      <Link href={action.href} key={action.href} onClick={() => setIsOpen(false)}>
                        {action.label}
                        <ArrowRight aria-hidden="true" size={14} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="assistant-prompts" aria-label="Quick project prompts">
          {quickPrompts.map((prompt) => (
            <button type="button" key={prompt} onClick={() => sendMessage(prompt)}>
              <Sparkles aria-hidden="true" size={13} />
              {prompt}
            </button>
          ))}
        </div>

        <form className="assistant-form" onSubmit={handleSubmit}>
          <label htmlFor="assistant-message">Ask about your project</label>
          <div>
            <input
              id="assistant-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Website, app, automation..."
            />
            <button type="submit" aria-label="Send message">
              <Send aria-hidden="true" size={16} />
            </button>
          </div>
        </form>
      </section>
    </aside>
  );
}
