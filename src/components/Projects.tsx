import BackgroundParticles from "./BackgroundParticles"

const projects = [
  {
    number: "01",
    category: "FULL-STACK WEB APPLICATION",
    title: "ThesisTrack",
    description:
      "A web-based thesis monitoring and management system designed to streamline thesis submission, progress monitoring, document management, feedback, and defense scheduling.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    status: "COMPLETED",
    github: "https://github.com/azkil",
    featured: true,
  },

  {
    number: "02",
    category: "WEB APPLICATION",
    title: "User Management System",
    description:
      "A role-based user management application with authentication, CRUD operations, RESTful APIs, and PostgreSQL database integration.",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "REST API",
      "SQL",
    ],
    status: "COMPLETED",
    github: "https://github.com/azkil",
    featured: false,
  },

  {
    number: "03",
    category: "AI & AUTOMATION",
    title: "AI Workflow Automation",
    description:
      "Automation workflows integrating AI agents, webhooks, APIs, and chatbot functionality to streamline repetitive tasks and improve workflow efficiency.",
    technologies: [
      "n8n",
      "AI Agents",
      "Webhooks",
      "API Integration",
      "Chatbots",
    ],
    status: "ACTIVE",
    github: "https://github.com/azkil",
    featured: false,
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <BackgroundParticles />

      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,0,0,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Red glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-[10px] font-bold tracking-[0.35em] text-red-500">
              PROJECT DATABASE
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">

            <div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Featured
                <span className="text-red-500"> Work.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                Selected software development, database, and automation
                projects demonstrating my technical skills and problem-solving
                capabilities.
              </p>

            </div>

            {/* Project counter */}

            <div className="border border-red-500/20 bg-red-500/5 px-5 py-3">

              <p className="text-[8px] tracking-[0.3em] text-gray-600">
                PROJECTS
              </p>

              <p className="mt-1 text-xl font-black text-red-500">
                03<span className="text-gray-600">+</span>
              </p>

            </div>

          </div>

        </div>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <div className="space-y-6">

          {projects.map((project) => (

            <article
              key={project.number}
              className={`page-card group relative overflow-hidden border bg-zinc-950 transition-all duration-500 ${
                project.featured
                  ? "border-red-500/30"
                  : "border-white/10 hover:border-red-500/30"
              }`}
              style={{ animationDelay: `${projects.indexOf(project) * 120}ms` }}
            >

              {/* Animated red line */}

              <div className="absolute left-0 top-0 h-px w-0 bg-red-500 transition-all duration-700 group-hover:w-full" />

              <div className="grid lg:grid-cols-[100px_1fr_180px]">

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="hidden border-r border-white/5 p-6 lg:block">

                  <span className="font-mono text-3xl font-black text-white/10 transition-colors duration-500 group-hover:text-red-500/30">
                    {project.number}
                  </span>

                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 sm:p-8">

                  {/* Category */}

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="text-[9px] font-bold tracking-[0.25em] text-red-500">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="border border-red-500/30 bg-red-500/5 px-2 py-1 text-[8px] tracking-widest text-red-400">
                        FEATURED
                      </span>
                    )}

                  </div>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-red-500 sm:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] font-medium tracking-wider text-gray-400 transition-all duration-300 group-hover:border-red-500/20 group-hover:text-gray-300"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-7 flex flex-wrap gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/button inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3 text-[10px] font-bold tracking-widest text-gray-300 transition-all duration-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
                    >
                      GITHUB

                      <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>
                    </a>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-3 text-[10px] font-bold tracking-widest text-gray-600 transition-colors hover:text-white"
                    >
                      VIEW DETAILS
                      <span>↗</span>
                    </button>

                  </div>

                </div>

                {/* =================================================
                    STATUS
                ================================================== */}

                <div className="flex flex-row items-center justify-between border-t border-white/5 p-6 lg:flex-col lg:items-end lg:justify-between lg:border-l lg:border-t-0">

                  <div className="text-right">

                    <p className="text-[8px] tracking-[0.25em] text-gray-700">
                      STATUS
                    </p>

                    <div className="mt-2 flex items-center justify-end gap-2">

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          project.status === "ACTIVE"
                            ? "animate-pulse bg-red-500 shadow-[0_0_10px_red]"
                            : "bg-green-500 shadow-[0_0_8px_#00ff00]"
                        }`}
                      />

                      <span className="text-[9px] font-bold tracking-widest text-gray-400">
                        {project.status}
                      </span>

                    </div>

                  </div>

                  {/* Decorative graphic */}

                  <div className="hidden lg:block">

                    <div className="flex items-end gap-1">

                      {[20, 35, 15, 45, 30, 55, 40].map(
                        (height, index) => (

                          <span
                            key={index}
                            className="w-1 bg-red-500/30 transition-all duration-500 group-hover:bg-red-500"
                            style={{
                              height: `${height}px`,
                            }}
                          />

                        )
                      )}

                    </div>

                    <p className="mt-2 text-right text-[7px] tracking-widest text-gray-700">
                      SYSTEM.LOG
                    </p>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border border-white/5 bg-zinc-950/50 p-6 sm:flex-row">

          <div>

            <p className="text-[9px] tracking-[0.3em] text-red-500">
              MORE PROJECTS
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Explore additional projects and source code on GitHub.
            </p>

          </div>

          <a
            href="https://github.com/azkil"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 border border-red-500/40 px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-black"
          >
            OPEN GITHUB →
          </a>

        </div>

      </div>
    </section>
  )
}

export default Projects