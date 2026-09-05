import { useEffect, useState } from "react"

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${3 + Math.random() * 5}s`,
}))

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,0,0,0.14),transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Red glow edges */}

      <div className="absolute left-0 top-0 h-full w-[2px] bg-red-600/70 shadow-[0_0_25px_#ff0000]" />

      <div className="absolute right-0 top-0 h-full w-[2px] bg-red-600/70 shadow-[0_0_25px_#ff0000]" />

      {/* =====================================================
          PARTICLES
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-[2px] w-[2px] rounded-full bg-red-500 animate-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}

        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rotate-45 border border-red-500/60" />

            <span className="relative text-sm font-black italic text-red-500">
              000
            </span>
          </div>

          <div>
            <div className="text-lg font-black tracking-widest">
              SHANSAN ROSALES
            </div>

            <div className="text-[9px] tracking-[0.35em] text-red-500">
              DIGITAL SYSTEM
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden rounded-full border border-red-500/40 bg-black/50 px-2 py-2 backdrop-blur-xl md:flex">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-full px-6 py-2 text-sm transition-all duration-300 ${
                  index === 0
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                    : "text-gray-300 hover:bg-red-600/20 hover:text-white"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Hire button */}

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full border border-red-500 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] sm:flex"
        >
          Hire Me

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </header>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className={`relative z-30 max-w-xl transition-all duration-1000 ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Status */}

          <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-red-500/40 bg-red-950/20 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>

            <span className="text-xs font-medium tracking-[0.2em] text-gray-300">
              SYSTEM ONLINE
            </span>
          </div>

          {/* Hello */}

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-red-500" />

            <span className="text-sm font-semibold tracking-[0.3em] text-red-500">
              HELLO, I'M
            </span>
          </div>

          {/* Name */}

          <h1 className="font-black uppercase leading-[0.85] tracking-tight">
            <span className="block text-6xl sm:text-7xl lg:text-8xl">
              Shamah Angel Mar
            </span>

            <span className="mt-2 block text-6xl italic text-red-500 sm:text-7xl lg:text-8xl">
              Rosales
            </span>
          </h1>

          {/* Role */}

          <div className="mt-7 flex items-center gap-4">
            <div className="h-10 w-1 bg-red-600 shadow-[0_0_15px_#ff0000]" />

            <div>
              <p className="text-xl font-semibold sm:text-2xl">
                Web Developer
              </p>

              <p className="text-sm tracking-[0.25em] text-gray-400">
                & VIRTUAL ASSISTANT
              </p>
            </div>
          </div>

          {/* Description */}

          <p className="mt-7 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            I build modern, responsive web applications and provide
            reliable virtual assistance to help businesses stay
            organized, productive, and digitally efficient.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-md bg-red-600 px-6 py-3.5 font-semibold transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.55)]"
            >
              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="src\ShamahRosalesCV.pdf"
              download
              className="group flex items-center gap-3 rounded-md border border-gray-600 px-6 py-3.5 font-semibold transition-all duration-300 hover:border-red-500 hover:text-red-500"
            >
              Download CV

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>

          {/* Social */}

          <div className="mt-10 flex items-center gap-4">
            <span className="mr-2 text-[10px] tracking-[0.3em] text-gray-600">
              CONNECT
            </span>

            <a
              href="https://github.com/azkil"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xs transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/shamah-rosales-191389368/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xs transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              IN
            </a>

            <a
              href="mailto:shamahangel@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-xs transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              @
            </a>
          </div>
        </div>

        {/* =================================================
            ROBOT AREA
        ================================================== */}

        <div className="relative flex h-[620px] items-center justify-center lg:h-[720px]">
          {/* Large red glow */}

          <div className="absolute right-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-red-600/10 blur-[100px]" />

          {/* =================================================
              OUTER HUD RING
          ================================================== */}

          <div className="absolute right-[5%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-red-500/20 animate-spin-slow" />

          <div className="absolute right-[9%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/10 border-t-white/80 animate-spin-reverse" />

          <div className="absolute right-[13%] top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-red-500/30 border-l-transparent animate-spin-slow" />

          {/* HUD crosshair */}

          <div className="absolute right-[27%] top-[18%] h-8 w-8 border-l border-t border-red-500" />

          <div className="absolute bottom-[18%] right-[12%] h-8 w-8 border-b border-r border-red-500" />

          {/* =================================================
              ROBOT
          ================================================== */}

          <div className="robot-container relative z-20 w-[620px] max-w-[120%] animate-robot-float">
            {/* Robot glow */}

            <div className="absolute left-1/2 top-[42%] h-[350px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[70px]" />

            {/* Image */}

            <img
              src="src\gundam.png"
              alt="Gundam Robot"
              className="relative z-10 w-full object-contain mix-blend-screen drop-shadow-[0_0_35px_rgba(255,0,0,0.45)]"
            />

            {/* Scan line */}

            <div className="absolute left-[20%] right-[20%] top-[20%] z-30 h-px bg-red-500 shadow-[0_0_15px_#ff0000] animate-scan" />
          </div>

        

          {/* =================================================
              STATUS PANEL
          ================================================== */}

       <div
  className="
    absolute
    bottom-[10%]
    right-[2%]
    z-40
    hidden
    w-56
    rounded-sm
    border
    border-red-500/30
    bg-black/80
    p-4
    backdrop-blur-xl
    lg:block
  "
>
  {/* Header */}
  <div className="mb-4 flex items-center justify-between">
    <p className="text-[10px] font-bold tracking-[0.3em] text-red-500">
      SYSTEM STATUS
    </p>

    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_#ff0000] animate-pulse" />
  </div>

  {/* Status items */}
  <div className="space-y-3">
    {[
      ["CODING", "ONLINE"],
      ["CREATIVE", "ACTIVE"],
      ["LEARNING", "ALWAYS"],
    ].map(([label, status]) => (
      <div
        key={label}
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/5
          pb-2
          last:border-0
          last:pb-0
        "
      >
        {/* Label */}
        <span className="text-[9px] font-medium tracking-[0.15em] text-gray-500">
          {label}
        </span>

        {/* Status */}
        <span className="flex min-w-[75px] items-center justify-end gap-2 text-[9px] font-medium tracking-wider text-gray-300">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 shadow-[0_0_8px_#00ff00]" />

          <span>{status}</span>
        </span>
      </div>
    ))}
  </div>

  {/* Bottom indicator */}
  <div className="mt-4 border-t border-red-500/10 pt-3">
    <div className="flex items-center justify-between text-[8px]">
      <span className="tracking-[0.2em] text-gray-600">
        SYSTEM
      </span>

      <span className="text-green-500">
        100% OPERATIONAL
      </span>
    </div>
  </div>
</div>

          {/* =================================================
              RADAR
          ================================================== */}

          <div className="absolute bottom-[4%] left-[5%] hidden h-28 w-28 items-center justify-center rounded-full border border-red-500/30 lg:flex">
            <div className="absolute inset-3 rounded-full border border-red-500/20" />

            <div className="absolute inset-7 rounded-full border border-red-500/30" />

            <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_#ff0000]" />

            <div className="absolute h-px w-full bg-red-500/40" />

            <div className="absolute h-full w-px bg-red-500/40" />
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] tracking-[0.3em] text-gray-500 md:flex"
      >
        <span>SCROLL DOWN</span>

        <span className="animate-bounce text-lg text-red-500">
          ↓
        </span>
      </a>

      {/* Bottom line */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </section>
  )
}