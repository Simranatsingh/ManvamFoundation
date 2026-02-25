"use client"

import { useState, useEffect } from "react"

interface HeroSliderProps {
  onDonateClick: () => void
}

export default function HeroSlider({ onDonateClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const backgroundImages = [
    "/images/homelay2.jpeg",
    "/images/homelay3.jpeg",
    "/images/homelay1.jpeg",
  ]

  const slides = [
    {
      title: "Manvam Foundation",
      subtitle: "We are here for help",
    },
    {
      title: "Manvam Foundation",
      subtitle: "We are here for help",
    },
    {
      title: "Manvam Foundation",
      subtitle: "We are here for help",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [backgroundImages.length])

  return (
    <section id="home" className="relative h-screen pt-20 overflow-hidden">
      {backgroundImages.map((bgImage, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Darker overlay for stronger contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          {/* BOLDER + DARKER TITLE */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            {slides[currentSlide].title}
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-amber-100 mb-8 drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>

          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Empowering communities through compassion, commitment, and sustainable development initiatives.
          </p>

          <button
            onClick={onDonateClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg transition inline-block"
          >
            Support Our Mission
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}