"use client"

import { useState } from "react"
import BlogSection from "@/components/sections/BlogSection"
import DonateModal from "@/components/DonateModal"

export default function BlogPage() {
  const [showDonateModal, setShowDonateModal] = useState(false)

  return (
    <>
      <BlogSection onDonateClick={() => setShowDonateModal(true)} />
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
    </>
  )
}
