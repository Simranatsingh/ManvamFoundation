"use client"

import type { Campaign } from "@/types"

interface CampaignCardProps {
  campaign: Campaign
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const progressPercentage = (campaign.raised / campaign.goal) * 100

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-200 to-green-200 flex items-center justify-center">
        <div className="text-6xl">🌱</div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{campaign.title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{campaign.description}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-foreground/60">
            <span>₹{campaign.raised.toLocaleString()}</span>
            <span>₹{campaign.goal.toLocaleString()}</span>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded font-semibold transition">
          Learn More
        </button>
      </div>
    </div>
  )
}
