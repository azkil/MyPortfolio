type BackgroundParticlesProps = {
  className?: string
}

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${3 + Math.random() * 5}s`,
}))

const BackgroundParticles = ({ className = "" }: BackgroundParticlesProps) => {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-red-500/80 animate-particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundParticles
