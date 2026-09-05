import BackgroundParticles from "./BackgroundParticles"

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "Database Design",
    ],
  },
  {
    title: "Automation & AI",
    skills: [
      "n8n",
      "AI Agents",
      "Workflow Automation",
      "Webhooks",
      "API Integration",
      "AI Chatbots",
    ],
  },
  {
    title: "Tools & Productivity",
    skills: [
      "Git",
      "GitHub",
      "Microsoft Office",
      "Excel",
      "Google Sheets",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "Technical & Engineering",
    skills: [
      "Python",
      "QGIS",
      "ArcGIS",
      "AutoCAD",
      "Blender",
      "Cybersecurity",
      "Burp Suite",
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="page-reveal relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <BackgroundParticles />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
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

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-12 bg-red-500" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              SYSTEM CAPABILITIES
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Skills &{" "}
            <span className="text-red-500">
              Technologies
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            A combination of web development, automation, database,
            productivity, and technical skills used to build systems and
            support digital workflows.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="page-card group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.05]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Top red line */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-red-600 via-red-400 to-transparent opacity-70 transition group-hover:opacity-100" />

              {/* Number */}
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] text-red-500">
                  MODULE_{String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[10px] text-gray-700">
                  00{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-5 text-lg font-bold text-white">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-xs font-medium text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom status */}
              <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                  Operational
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill meter */}
        <div className="mt-12 rounded-xl border border-red-500/10 bg-red-500/[0.02] p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">
              Technical Profile
            </span>

            <span className="font-mono text-[10px] text-gray-600">
              SYSTEM_STATUS: ONLINE
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["Web Development", "90%"],
              ["Database & SQL", "85%"],
              ["Automation & AI", "80%"],
              ["Technical Support", "85%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between">
                  <span className="text-xs text-gray-500">
                    {label}
                  </span>

                  <span className="font-mono text-xs text-red-500">
                    {value}
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-red-500 transition-all duration-1000"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills