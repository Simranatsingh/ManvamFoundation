"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">About Manvam Foundation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Mission Statement */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Manvam Foundation is dedicated to empowering underprivileged communities through sustainable social
              welfare initiatives, with a special focus on healthcare access and community development.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              We believe that real change begins at the grassroots level. Our team works tirelessly to provide essential
              services and support to those in need, especially in rural areas.
            </p>
          </div>

          {/* Right: Values */}
          <div className="bg-background rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-xl">❤️</span> Compassion
                </h4>
                <p className="text-foreground/70 text-sm">We care deeply about every individual we serve.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-xl">💪</span> Commitment
                </h4>
                <p className="text-foreground/70 text-sm">We are dedicated to creating lasting change.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-xl">🤝</span> Community
                </h4>
                <p className="text-foreground/70 text-sm">Together, we build stronger, healthier communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
