
"use client"

import { useState } from "react"
import Link from "next/link"
import DonateModal from "@/components/DonateModal"

export default function CampaignsPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)

  const campaigns = [
    {
      id: 1,
      title: "Basic Healthcare Support – Siktaha",
      shortDescription:
        "Providing basic healthcare services, medical support, and essential devices to underprivileged and homeless people in Siktaha.",
      description:
        "This campaign focused on organizing healthcare camps in Siktaha where doctors were invited to provide basic health checkups for villagers and homeless individuals. People received free medical consultations, medicines, and health awareness guidance.",
      longDescription:
        "During this initiative, Manvam Foundation arranged medical camps where healthcare professionals examined patients and provided necessary medicines. Essential medical support like hearing aids, wheelchairs, and assistive devices were distributed to those in need. The goal of the campaign was to make healthcare accessible to rural communities who otherwise struggle to receive proper medical attention. Through volunteer efforts and community participation, the initiative helped improve overall health awareness and support for vulnerable families.",
      status: "active",
      icon: "🏥",
      images: [
        "/images/homelay1.jpeg",
        "/images/homelay3.jpeg",
        "/images/homelay2.jpeg",
      ],
    },
    {
      id: 2,
      title: "Community Support & Basic Necessities Drive",
      shortDescription:
        "Encouraging people to come together and support underprivileged families with essential daily necessities.",
      description:
        "This campaign invited community members to step forward and contribute towards helping people in need by providing books, pens, ration supplies, and other essential items.",
      longDescription:
        "Through this initiative, Manvam Foundation motivated volunteers and donors to help vulnerable families by distributing educational materials, food supplies, and basic necessities. The campaign aimed to promote kindness, community participation, and social responsibility while ensuring that underprivileged individuals receive the support required for daily living and education.",
      status: "active",
      icon: "🤝",
      images: [
      "/images/camp2.1.jpeg",
        "/images/camp2.2.jpeg",
        "/images/camp2.3.jpeg",
        "/images/camp2.4.jpeg",
        "/images/camp2.5.jpeg",
        "/images/camp2.6.jpeg",
        "/images/camp2.7.jpeg",
      ],
    },
  ]

  return (
    <>
      <main className="w-full pt-20">

        {/* Page Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-border">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Campaigns
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover the meaningful work we are doing to transform communities and improve lives through our initiatives.
            </p>
          </div>
        </section>

        {/* Campaigns List */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg border border-border mb-12"
              >
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 flex items-center gap-6">
                  <div className="text-6xl">{campaign.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {campaign.title}
                    </h2>
                    <p className="text-foreground/70">
                      {campaign.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    About This Campaign
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {campaign.description}
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
                    Our Impact
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-8">
                    {campaign.longDescription}
                  </p>

                  {/* Campaign Gallery */}
                  <div className="my-12">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Campaign Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {campaign.images.map((img, index) => (
                        <div
                          key={index}
                          className="aspect-video rounded-lg overflow-hidden border border-border"
                        >
                          <img
                            src={img}
                            alt={`${campaign.title} image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setShowDonateModal(true)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
                    >
                      Support This Campaign
                    </button>
                    <Link
                      href="/campaigns"
                      className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition"
                    >
                      View All Campaigns
                    </Link>
                  </div>

                  <div className="mt-6">
                    <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                      ● {campaign.status === "active"
                        ? "Ongoing Initiative"
                        : "Completed"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <DonateModal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
      />
    </>
  )
}