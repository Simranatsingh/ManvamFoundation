// ============================================================================
// PAGE: HOME PAGE (/)
// PURPOSE: Main landing page of Manvam Foundation website
// COMPONENTS ON THIS PAGE:
// 1. Loader - Shows when page first loads (2 seconds)
// 2. HeroSlider - Full-screen hero with 3 rotating background images
// 3. AboutSection - "About Manvam Foundation" text content
// 4. VideoSection - Video player area for foundation stories
// 5. DonateModal - Popup modal for donations (triggered by donate button)
// ============================================================================

"use client"

import { useState, useEffect } from "react"
import HeroSlider from "@/components/sections/HeroSlider"
import AboutSection from "@/components/sections/AboutSection"
import VideoSection from "@/components/sections/VideoSection"
import DonateModal from "@/components/DonateModal"
import Loader from "@/components/Loader"

export default function Home() {
  // ============================================================================
  // PAGE STATE MANAGEMENT
  // loading: Shows loader for 2 seconds when page loads (BACKEND UPDATE: Change 2000 to adjust duration)
  // showDonateModal: Shows/hides donation popup when donate button is clicked
  // ============================================================================
  const [loading, setLoading] = useState(true)
  const [showDonateModal, setShowDonateModal] = useState(false)

  // Show loader for 2 seconds on initial page load
  // BACKEND UPDATE: Change 2000 (milliseconds) to show loader for different duration
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
