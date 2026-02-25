"use client"

import { campaignsData } from "@/data/campaigns"

interface CampaignsProps {
  onDonateClick?: () => void
}

export default function Campaigns({ onDonateClick }: CampaignsProps) {
  return (
    <section id="campaigns" className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Our Campaigns</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Discover the meaningful initiatives we are undertaking to create positive change in underprivileged
          communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaignsData.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-border"
            >
              <div className="w-full h-52 bg-gradient-to-br from-amber-200 to-yellow-300"></div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-foreground">{campaign.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{campaign.description}</p>

                <div className="inline-block w-fit bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium mt-2">
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