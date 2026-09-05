import BackgroundParticles from "./BackgroundParticles"

const About = () => {
  const highlights = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Building responsive web applications with React, TypeScript, Node.js, Express.js, and PostgreSQL.",
    },
    {
      number: "02",
      title: "Virtual Assistance",
      description:
        "Supporting digital workflows through data entry, web research, document management, spreadsheets, and administrative tasks.",
    },
    {
      number: "03",
      title: "Automation & AI",
      description:
        "Creating workflow automations using n8n, webhooks, APIs, AI agents, and chatbot integrations.",
    },
  ]

  return (
    <section
      id="about"
      className="page-reveal relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <BackgroundParticles />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,0,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,0,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-64 w-64 rounded-full bg-red-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-red-500" />

            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              ABOUT PROFILE
            </p>
          </div>

          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Building solutions through{" "}
            <span className="text-red-500">technology.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Description */}
          <div className="space-y-6">

            <div className="border-l-2 border-red-500/60 pl-6">
              <p className="text-lg leading-8 text-gray-300">
                I am a Bachelor of Science in Information Technology student
                with a strong interest in{" "}
                <span className="font-semibold text-white">
                  web development, virtual assistance, automation, and
                  technology-driven solutions.
                </span>
              </p>
            </div>

            <p className="text-base leading-8 text-gray-500">
              I enjoy working on projects that solve real-world problems,
              combining frontend development, backend services, databases,
              APIs, and automation to create practical and reliable digital
              solutions.
            </p>

            <p className="text-base leading-8 text-gray-500">
              As a tech-savvy virtual assistant, I can also support digital
              operations through data entry, web research, document
              organization, spreadsheet management, website updates, and
              workflow automation.
            </p>

            <p className="text-base leading-8 text-gray-500">
              One of my major projects is{" "}
              <span className="font-semibold text-red-400">
                ThesisTrack
              </span>
              , a web-based thesis monitoring and management system designed
              to streamline thesis submission, progress monitoring, document
              management, feedback, and defense scheduling.
            </p>

          </div>

          {/* Profile panel */}
          <div className="relative">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">

              {/* Panel header */}
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">
                  PROFILE_DATA
                </span>

                <span className="flex items-center gap-2 font-mono text-[9px] text-gray-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  ONLINE
                </span>
              </div>

              {/* Info */}
              <div className="space-y-5">

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Name
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Shamah Rosales
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Role
                  </p>

                  <p className="mt-1 text-sm font-semibold text-red-400">
                    Web Developer & Virtual Assistant
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Specialization
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Web Development · Automation · Digital Support
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Status
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#00ff00]" />
                    Available for opportunities
                  </p>
                </div>

              </div>

              {/* Decorative footer */}
              <div className="mt-8 border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-gray-700">
                    SYSTEM_ID: SHM-DEV-VA
                  </span>

                  <span className="font-mono text-[8px] text-gray-700">
                    v1.0
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">

          {highlights.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.04]"
            >
              {/* Top line */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />

              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs text-red-500">
                  {item.number}
                </span>

                <span className="font-mono text-[9px] tracking-[0.2em] text-gray-700">
                  CAPABILITY
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-700">
                  Active
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default About