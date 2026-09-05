import BackgroundParticles from "./BackgroundParticles"

const Contact = () => {
  return (
    <section id="contact" className="page-reveal relative overflow-hidden bg-black px-6 py-24 text-white">
      <BackgroundParticles />
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Contact
        </p>

        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I'm open to opportunities, collaborations, internships, and
          software development projects.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="mailto:shamahangel@gmail.com"
            className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-blue-600"
          >
            Email Me
          </a>

          <a
            href="https://github.com/azkil"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 hover:border-blue-600 hover:text-blue-600"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact