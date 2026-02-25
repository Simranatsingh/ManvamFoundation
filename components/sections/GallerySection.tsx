"use client"

import { galleryData } from "@/data/gallery"
import { useState } from "react"

interface GallerySectionProps {
  onDonateClick: () => void
}

export default function GallerySection({ onDonateClick }: GallerySectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Witness the impact of our work across villages and communities. These moments capture our mission in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryData.map((image) => (
            <div
              key={image.id}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-lg h-64 md:h-72 cursor-pointer shadow-lg hover:shadow-xl transition"
            >
              {/* REAL IMAGE */}
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/60 text-sm mb-6">
            To add more photos: Edit the{" "}
            <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
              data/gallery.ts
            </code>{" "}
            file and add new gallery items.
          </p>
          <button
            onClick={onDonateClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
          >
            Support Our Work
          </button>
        </div>
      </div>
    </section>
  )
}