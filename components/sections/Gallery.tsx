"use client"

import { galleryData } from "@/data/gallery"
import { useState } from "react"

interface GalleryProps {
  onDonateClick?: () => void
}

export default function Gallery({ onDonateClick }: GalleryProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Gallery</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          See the impact of our work across communities. These moments capture the essence of our mission.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((image) => (
            <div
              key={image.id}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-lg h-64 md:h-72 cursor-pointer bg-gradient-to-br from-amber-200 to-yellow-300 shadow-lg hover:shadow-xl transition"
            >
              {/* Image Placeholder with Icon */}
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition duration-300 relative">
                <div className="text-center z-10 relative">
                  <div className="text-6xl mb-3">📸</div>
                  <p className="text-foreground font-bold text-lg">{image.title}</p>
                  <p className="text-foreground/70 text-sm mt-2">{image.description}</p>
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
