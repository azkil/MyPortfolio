import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

type Message = {
  id: number
  role: "user" | "agent"
  content: string
}

const initialMessage: Message = {
  id: 1,
  role: "agent",
  content:
    "Hello. I am Shamah's AI portfolio assistant. I can tell you about his skills, projects, services, experience, and how he can help your business.",
}

const AIAgent = () => {
  const [messages, setMessages] = useState<Message[]>([
    initialMessage,
  ])

  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages, isTyping])

  const getAIResponse = (question: string): string => {
    const q = question.toLowerCase().trim()

    // Greetings
    if (
      q === "hi" ||
      q === "hello" ||
      q === "hey" ||
      q.includes("good morning") ||
      q.includes("good afternoon")
    ) {
      return "Hello! I'm Shamah's AI portfolio assistant. You can ask me about his skills, services, projects, experience, or how to hire him."
    }

    // Skills
    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("technologies") ||
      q.includes("tech stack") ||
      q.includes("what can you do")
    ) {
      return "Shamah works with React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Shadcn UI, Node.js, Express.js, PostgreSQL, SQL, Python, REST APIs, Git, GitHub, n8n, AI agents, workflow automation, webhooks, API integration, and AI-powered chatbots."
    }

    // Frontend
    if (
      q.includes("react") ||
      q.includes("frontend") ||
      q.includes("front-end") ||
      q.includes("ui")
    ) {
      return "Shamah has frontend development experience using React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, and Shadcn UI. He focuses on responsive, practical, and user-friendly interfaces."
    }

    // Backend
    if (
      q.includes("backend") ||
      q.includes("back-end") ||
      q.includes("node") ||
      q.includes("express") ||
      q.includes("api")
    ) {
      return "For backend development, Shamah works with Node.js, Express.js, REST APIs, PostgreSQL, SQL, authentication, CRUD operations, and database design."
    }

    // Database
    if (
      q.includes("database") ||
      q.includes("postgres") ||
      q.includes("sql")
    ) {
      return "Shamah has experience with PostgreSQL and SQL, including database design, normalization, CRUD operations, relationships, and integrating databases with web applications."
    }

    // Automation / AI
    if (
      q.includes("automation") ||
      q.includes("n8n") ||
      q.includes("ai agent") ||
      q.includes("chatbot") ||
      q.includes("webhook")
    ) {
      return "Shamah works with n8n, AI agents, webhooks, API integrations, workflow automation, and AI-powered chatbots. These technologies can be used to automate repetitive tasks and connect different systems."
    }

    // Virtual Assistant
    if (
      q.includes("virtual assistant") ||
      q.includes("va") ||
      q.includes("administrative") ||
      q.includes("admin support")
    ) {
      return "Shamah can provide tech-savvy virtual assistance including data entry, web research, spreadsheet work, document management, website updates, administrative support, technical support, and workflow automation."
    }

    // Data Entry
    if (
      q.includes("data entry") ||
      q.includes("excel") ||
      q.includes("spreadsheet") ||
      q.includes("google sheets")
    ) {
      return "For data and administrative support, Shamah can work with spreadsheets, Excel, Google Sheets, data organization, data entry, document preparation, and digital record management."
    }

    // Web Research
    if (
      q.includes("research") ||
      q.includes("web research")
    ) {
      return "Shamah can assist with web research, gathering information from online sources, organizing findings, and preparing structured data for business or administrative use."
    }

    // Projects
    if (
      q.includes("project") ||
      q.includes("portfolio")
    ) {
      return "Shamah's portfolio focuses on web development, workflow automation, and technical solutions. His major project is ThesisTrack, along with a User Management System and AI Workflow Automation projects."
    }

    // ThesisTrack
    if (
      q.includes("thesistrack") ||
      q.includes("thesis track") ||
      q.includes("thesis management")
    ) {
      return "ThesisTrack is a web-based thesis monitoring and management system. It was designed to streamline thesis submission, progress monitoring, document management, feedback, and defense scheduling using technologies such as React, Node.js, Express.js, PostgreSQL, Tailwind CSS, and Shadcn UI."
    }

    // User Management
    if (
      q.includes("user management") ||
      q.includes("management system")
    ) {
      return "The User Management System is a web application built with React, Express.js, and PostgreSQL. It includes CRUD operations, authentication, REST APIs, SQL database integration, and role-based access."
    }

    // Experience
    if (
      q.includes("experience") ||
      q.includes("background") ||
      q.includes("work")
    ) {
      return "Shamah is a Bachelor of Science in Information Technology student with practical experience developing web systems, designing databases, creating APIs, implementing authentication, and building automation workflows."
    }

    // Why hire
    if (
      q.includes("why should i hire") ||
      q.includes("why hire") ||
      q.includes("hire you")
    ) {
      return "Shamah combines technical development skills with virtual assistance capabilities. He can help with both technical tasks and day-to-day digital workflows, making him suitable for roles involving web development, administrative support, automation, and technical assistance."
    }

    // Services
    if (
      q.includes("service") ||
      q.includes("services") ||
      q.includes("offer")
    ) {
      return "Shamah offers web development, virtual assistance, data entry, web research, document management, spreadsheet support, website management, technical support, workflow automation, AI chatbot integration, and API integration."
    }

    // Contact
    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("reach") ||
      q.includes("hire")
    ) {
      return "You can contact Shamah through the Contact section of this portfolio. He is open to opportunities involving virtual assistance, web development, automation, and technical support."
    }

    // Availability
    if (
      q.includes("available") ||
      q.includes("availability")
    ) {
      return "Shamah is open to professional opportunities involving virtual assistance, web development, automation, technical support, and related digital work."
    }

    // Location
    if (
      q.includes("where are you") ||
      q.includes("location") ||
      q.includes("based")
    ) {
      return "Shamah is based in Bayugan City, Agusan del Sur, Philippines."
    }

    return "I can help you learn more about Shamah's skills, services, projects, experience, web development background, virtual assistance capabilities, automation work, or contact information."
  }

  const handleSend = async (customMessage?: string) => {
    const messageText = (customMessage ?? input).trim()

    if (!messageText || isTyping) {
      return
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: messageText,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    )

    const response = getAIResponse(messageText)

    const agentMessage: Message = {
      id: Date.now() + 1,
      role: "agent",
      content: response,
    }

    setMessages((prev) => [...prev, agentMessage])
    setIsTyping(false)
  }

  const clearChat = () => {
    setMessages([
      {
        ...initialMessage,
        id: Date.now(),
      },
    ])

    setInput("")
  }

  const quickQuestions = [
    "What are your skills?",
    "Tell me about ThesisTrack",
    "What services do you offer?",
    "Why should I hire you?",
  ]

  return (
    <main className="page-reveal min-h-screen overflow-hidden bg-black text-white">

      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">

        {/* Top Navigation */}
        <div className="mb-5 flex items-center justify-between">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          >
            <span className="text-red-500">
              ←
            </span>
            Home
          </Link>

          <button
            onClick={clearChat}
            className="rounded-lg border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-500 transition hover:border-red-500/30 hover:text-red-400"
          >
            Clear Chat
          </button>

        </div>

        {/* Header */}
        <header className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_12px_#00ff00]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-500">
                AI SYSTEM ONLINE
              </span>

            </div>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              AI{" "}
              <span className="text-red-500">
                Agent
              </span>
            </h1>

            <p className="mt-2 max-w-xl text-sm text-gray-600">
              Interactive portfolio assistant for Shamah Rosales.
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                MODEL
              </span>

              <p className="font-mono text-xs text-gray-300">
                PORTFOLIO-AI
              </p>
            </div>

            <div className="border border-red-500/20 bg-red-500/5 px-4 py-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                STATUS
              </span>

              <p className="font-mono text-xs text-red-400">
                READY
              </p>
            </div>

          </div>

        </header>

        {/* Main */}
        <div className="grid flex-1 gap-6 lg:grid-cols-[280px_1fr]">

          {/* Agent Profile */}
          <aside className="hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:block">

            <div className="mb-6">

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500">
                AGENT PROFILE
              </p>

              <div className="mt-5 flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-red-500/20 bg-black">

                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-red-500/20">

                  <div className="absolute inset-3 animate-[spin_8s_linear_infinite] rounded-full border border-dashed border-red-500/20" />

                  <div className="absolute inset-8 rounded-full border border-red-500/30" />

                  <div className="h-16 w-16 animate-pulse rounded-full border border-red-500 bg-red-500/10 shadow-[0_0_40px_rgba(255,0,0,0.25)]" />

                  <span className="absolute font-mono text-[8px] tracking-[0.2em] text-red-400">
                    AI
                  </span>

                </div>

              </div>

            </div>

            <div className="space-y-5">

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Agent Name
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Shan AI
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Purpose
                </p>

                <p className="mt-1 text-xs leading-6 text-gray-500">
                  Portfolio assistant for skills, projects, services,
                  experience, and professional inquiries.
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Capabilities
                </p>

                <div className="mt-2 flex flex-wrap gap-2">

                  {[
                    "Q&A",
                    "Skills",
                    "Projects",
                    "Services",
                    "Experience",
                    "VA",
                    "Automation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 px-2 py-1 font-mono text-[8px] text-gray-500"
                    >
                      {item}
                    </span>
                  ))}

                </div>
              </div>

            </div>

          </aside>

          {/* Chat */}
          <section className="flex min-h-[650px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">

            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-600">
                  CONVERSATION CHANNEL
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-200">
                  Shamah Portfolio Assistant
                </p>
              </div>

              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>

            </div>

            {/* Messages */}
            <div className="flex-1 space-y-5 overflow-y-auto p-5 md:p-8">

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-xl px-4 py-3 sm:max-w-[80%] ${
                      message.role === "user"
                        ? "border border-red-500/30 bg-red-500/10"
                        : "border border-white/10 bg-black/60"
                    }`}
                  >

                    <div className="mb-2 flex items-center gap-2">

                      <div
                        className={`h-1.5 w-1.5 rounded-full ${
                          message.role === "user"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                      />

                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-gray-600">
                        {message.role === "user"
                          ? "USER"
                          : "AI_AGENT"}
                      </span>

                    </div>

                    <p className="text-sm leading-7 text-gray-300">
                      {message.content}
                    </p>

                  </div>
                </div>
              ))}

              {/* Typing */}
              {isTyping && (
                <div className="flex justify-start">

                  <div className="rounded-xl border border-white/10 bg-black/60 px-4 py-3">

                    <div className="mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-gray-600">
                      AI_AGENT
                    </div>

                    <div className="flex gap-1">

                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-500" />

                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-500"
                        style={{
                          animationDelay: "150ms",
                        }}
                      />

                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-500"
                        style={{
                          animationDelay: "300ms",
                        }}
                      />

                    </div>

                  </div>

                </div>
              )}

              <div ref={messagesEndRef} />

            </div>

            {/* Quick Commands */}
            <div className="border-t border-white/10 px-5 py-3">

              <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-gray-700">
                QUICK COMMANDS
              </p>

              <div className="flex gap-2 overflow-x-auto pb-1">

                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    disabled={isTyping}
                    className="whitespace-nowrap rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-gray-500 transition hover:border-red-500/40 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {question}
                  </button>
                ))}

              </div>

            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4">

              <div className="flex gap-3">

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend()
                    }
                  }}
                  placeholder="Ask the AI agent something..."
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-700 transition focus:border-red-500/40"
                />

                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="rounded-lg bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send
                </button>

              </div>

              <p className="mt-2 font-mono text-[8px] text-gray-700">
                PRESS ENTER TO SEND
              </p>

            </div>

          </section>

        </div>

      </div>
    </main>
  )
}

export default AIAgent