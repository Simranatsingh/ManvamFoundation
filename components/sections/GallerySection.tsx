"use client"

import { galleryData } from "@/data/gallery"

export default function GallerySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Witness the impact of our work across villages and communities. These moments capture our mission in action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/60 text-sm mb-6">
            {" "}
            <code className="bg-muted px-2 py-1 rounded text-xs font-mono">
              
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
