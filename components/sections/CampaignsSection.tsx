"use client"
import { campaignsData } from "@/data/campaigns"

interface CampaignsSectionProps {
  onDonateClick: () => void
}

export default function CampaignsSection({ onDonateClick }: CampaignsSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Campaigns</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the meaningful work we are doing to transform communities and improve lives through our healthcare
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaignsData.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border"
            >
              {/* Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-2">🏥</div>
                  <p className="text-sm text-foreground/60 font-medium">{campaign.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{campaign.title}</h3>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{campaign.description}</p>
                <p className="text-foreground/60 text-xs mb-6 leading-relaxed">{campaign.details}</p>

                <div className="flex gap-3">
                  <button
                    onClick={onDonateClick}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition text-sm"
                  >
                    Support This Campaign
                  </button>
                </div>

                <div className="mt-4 inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  ● Ongoing Initiative
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
