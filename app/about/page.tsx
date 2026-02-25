
"use client"

import { useState } from "react"
import DonateModal from "@/components/DonateModal"

const founders = [
  {
    id: 1,
    name: "Avneesh Kumar Singh",
    role: "Chairman & Founder",
    image: "/images/avneeshsingpic.jpeg",
    description: `Avneesh Kumar Singh, the Chairman and Founder of Manvam Foundation, is a visionary leader driven by compassion, purpose, and a deep sense of social responsibility. With a Master's Degree in Commerce, he combines strong academic knowledge with practical leadership to create meaningful and lasting impact in society.

Inspired by the belief that real change begins at the grassroots level, Mr. Singh founded Manvam Foundation to serve humanity and uplift underprivileged communities. His vision focuses on empowering people through education, healthcare awareness, social welfare, and sustainable development initiatives, especially in rural areas.`,
  },

  {
    id: 2,
    name: "Neelam Singh",
    role: "Vice Chairman",
    image: "/images/neelamsinghpic.jpeg",
    description: `Neelam Singh serves as the Vice Chairman of Manvam Foundation and is a dedicated social worker deeply connected to grassroots development in rural areas. With a compassionate heart and strong understanding of village life, she actively works for the welfare of children and women, focusing on education, health, safety, and empowerment.`,
  },

  {
    id: 3,
    name: "Santosh Kumar Pal",
    role: "Vice Chairman",
    image: "/images/santoshpalpic.jpeg", 
    description: `Santosh Kumar Pal holds a Bachelor's degree in Arts and serves as the Treasurer of Manvam Foundation. With over 30 years of dedicated experience in social and charitable welfare, he has played a vital role in strengthening community-based initiatives.`,
  },
]

const mentors = [
  {
    id: 1,
    name: "Ashish Singh",
    role: "Mentor",
    image: "👨‍🏫",
    description:
      "Ashish Singh serves as a mentor to Manvam Foundation, providing strategic guidance and support in our mission to uplift underprivileged communities.",
  },
]

export default function AboutPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)

  return (
    <>
      <main className="w-full pt-20">

        {/* HEADER */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-border">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the dedicated individuals driving our mission to transform communities and change lives.
            </p>
          </div>
        </section>

        {/* FOUNDERS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Our Founders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {founders.map((founder) => (
                <div key={founder.id} className="flex flex-col items-center text-center">

                  {/* ✅ IMAGE FIXED */}
                  <div className="w-80 h-80 rounded-lg overflow-hidden border-4 border-primary mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
                    {founder.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Our Mentors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="flex flex-col items-center text-center">
                  <div className="w-72 h-72 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center text-8xl border-4 border-primary mb-6">
                    {mentor.image}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {mentor.role}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {mentor.description}
                  </p>
                </div>
              ))}
            </div>
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