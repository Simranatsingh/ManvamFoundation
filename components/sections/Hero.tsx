"use client"

interface HeroProps {
  onDonateClick: () => void
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <section id="home" className="relative h-screen pt-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,128,96,0.1) 0%, rgba(0,180,150,0.15) 50%, rgba(250,180,20,0.1) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Manvam Foundation
          </h2>
          <p className="text-2xl md:text-3xl text-yellow-300 font-serif italic mb-8 text-pretty">
            "We are here for help"
          </p>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Empowering communities, transforming lives. We believe in creating lasting change through compassion,
            commitment, and action.
          </p>
          <button
            onClick={onDonateClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg transition inline-block"
          >
            Support Our Mission
          </button>
        </div>
      </div>
    </section>
  )
}
