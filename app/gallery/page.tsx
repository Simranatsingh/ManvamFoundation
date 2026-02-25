"use client"

import { useState } from "react"
import GallerySection from "@/components/sections/GallerySection"
import DonateModal from "@/components/DonateModal"

export default function GalleryPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)

  return (
    <>
      <GallerySection onDonateClick={() => setShowDonateModal(true)} />
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
    </>
  )
}
