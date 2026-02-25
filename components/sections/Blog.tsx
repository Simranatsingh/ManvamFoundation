"use client"

interface BlogProps {
  onDonateClick?: () => void
}

export default function Blog({ onDonateClick }: BlogProps) {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Blog & Stories</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Inspiring stories and updates from our work in communities. Check back regularly for new content!
        </p>

        <div className="bg-card rounded-lg p-12 border border-border min-h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-4">📖</div>
            <p className="text-foreground/60 text-lg">Blog posts and stories will appear here soon.</p>
            <p className="text-foreground/50 text-sm mt-2">
              Check back to read inspiring stories from our community partners and beneficiaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
