

"use client"

import { useState, useEffect } from "react"
import HeroSlider from "@/components/sections/HeroSlider"
import AboutSection from "@/components/sections/AboutSection"
import VideoSection from "@/components/sections/VideoSection"
import DonateModal from "@/components/DonateModal"
import Loader from "@/components/Loader"

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [showDonateModal, setShowDonateModal] = useState(false)

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <main className="w-full">
        <HeroSlider onDonateClick={() => setShowDonateModal(true)} />

        <AboutSection />

        <VideoSection />
      </main>
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
    </>
  )
}
