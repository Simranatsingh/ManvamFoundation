"use client"

interface BlogSectionProps {
  onDonateClick: () => void
}

export default function BlogSection({ onDonateClick }: BlogSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & Stories</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Inspiring stories and updates from our work in communities and villages. These stories showcase the real
            impact we are making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border shadow-lg hover:shadow-xl transition min-h-80 flex flex-col">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h3>
            <p className="text-foreground/70 mb-6 flex-1">
              We are preparing inspiring stories from our community partners and beneficiaries. Stories that showcase
              the real impact of our healthcare and social welfare initiatives.
            </p>
            <button
              onClick={onDonateClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition text-sm w-full"
            >
              Support Our Work
            </button>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border shadow-lg hover:shadow-xl transition min-h-80 flex flex-col">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Video Stories</h3>
            <p className="text-foreground/70 mb-6 flex-1">
              Video content showcasing our work in villages and communities will be available soon. Subscribe to stay
              updated with our latest videos and documentaries.
            </p>
            <button
              onClick={onDonateClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition text-sm w-full"
            >
              Stay Updated
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
