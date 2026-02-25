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
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-border"
            >
              <div className="w-full h-64 bg-gradient-to-br from-amber-200 to-yellow-300"></div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-foreground">{campaign.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{campaign.description}</p>
                <p className="text-foreground/60 text-xs leading-relaxed">{campaign.details}</p>

                <button
                  onClick={onDonateClick}
                  className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition text-sm"
                >
                  Support This Campaign
                </button>

                <div className="inline-block w-fit bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">
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