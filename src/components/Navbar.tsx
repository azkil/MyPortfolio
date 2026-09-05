import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [isVisible, setIsVisible] = useState(!isHomePage)

  useEffect(() => {
    let previousScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (!isHomePage) {
        setIsVisible(true)
      } else {
        setIsVisible(currentScrollY > previousScrollY && currentScrollY > 0)
      }

      previousScrollY = currentScrollY
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const goToSection = (section: string) => {
    if (location.pathname !== "/") {
      window.location.href = "/#" + section
      return
    }

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav
      className={[
        "fixed top-0 z-50 w-full border-b border-red-500/10 bg-black/80 backdrop-blur-xl transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-black tracking-tight text-white transition hover:text-red-500"
        >
          Shamah Rosales
          <span className="text-red-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {/* Home */}
          <Link
            to="/"
            className={[
              "text-sm transition",
              location.pathname === "/"
                ? "font-semibold text-red-500"
                : "text-gray-500 hover:text-red-500",
            ].join(" ")}
          >
            Home
          </Link>

          {/* About */}
          <button
            type="button"
            onClick={() => goToSection("about")}
            className="text-sm text-gray-500 transition hover:text-red-500"
          >
            About
          </button>

          {/* Skills */}
          <button
            type="button"
            onClick={() => goToSection("skills")}
            className="text-sm text-gray-500 transition hover:text-red-500"
          >
            Skills
          </button>

          {/* Projects */}
          <button
            type="button"
            onClick={() => goToSection("projects")}
            className="text-sm text-gray-500 transition hover:text-red-500"
          >
            Projects
          </button>

          {/* AI Agent */}
          <Link
            to="/ai-agent"
            className={[
              "group flex items-center gap-2 text-sm font-medium transition",
              location.pathname === "/ai-agent"
                ? "text-red-400"
                : "text-gray-500 hover:text-red-400",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_#ff0000]" />

            AI Agent

            <span className="rounded border border-red-500/20 bg-red-500/5 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-red-500">
              Live
            </span>
          </Link>

          {/* Contact */}
          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="text-sm text-gray-500 transition hover:text-red-500"
          >
            Contact
          </button>

        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => goToSection("contact")}
          className="hidden rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-400 transition hover:bg-red-500 hover:text-white md:block"
        >
          Let's Talk
        </button>

      </div>
    </nav>
  )
}

export default Navbar