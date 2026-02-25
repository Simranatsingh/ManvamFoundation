"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none">
        <Image
          src="/images/logo.jpeg"
          alt="Manvam Foundation Logo"
          width={500}
          height={500}
          className="opacity-10 mt-10 object-contain"
          priority
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Manvam Foundation
          </h2>
        </div>

        {/* BACKEND UPDATE: Edit the About Us description here */}
        <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
          <p className="text-foreground/80 leading-relaxed text-lg mb-6">
            Manvam Foundation is a non-profit organization dedicated to serving humanity and uplifting underprivileged
            communities. Founded with a vision to create meaningful and lasting impact, we work across education,
            healthcare awareness, social welfare, and sustainable development initiatives, especially in rural areas.
          </p>

          <p className="text-foreground/80 leading-relaxed text-lg mb-6">
            We believe that real change begins at the grassroots level. Through compassion, commitment, and dedicated
            effort, we empower people to build better lives for themselves and their families. Every initiative we
            undertake is guided by the principle that every individual deserves dignity, opportunity, and hope.
          </p>

          <p className="text-foreground/80 leading-relaxed text-lg">
            Our work focuses on bridging the gap between those in need and those who have the capacity to help, creating
            sustainable solutions that transform communities one step at a time.
          </p>
        </div>
      </div>
    </section>
  )
}