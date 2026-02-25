"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface HeaderProps {
  onDonateClick?: () => void
}

export default function Header({ onDonateClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpeg"
            alt="Manvam Foundation Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
          <h1
            className={`text-lg md:text-xl font-black hidden sm:block transition-colors ${
              scrolled ? "text-foreground" : "text-amber-900"
            }`}
          >
            Manvam Foundation
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 transition-colors ${
            scrolled ? "text-foreground" : "text-amber-900"
          }`}
        >
          <Link href="/" className="text-sm font-medium hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition">
            About Us
          </Link>
          <Link href="/campaigns" className="text-sm font-medium hover:text-primary transition">
            Campaigns
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary transition">
            Gallery
          </Link>
          <Link href="/documents" className="text-sm font-medium hover:text-primary transition">
            Documents
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition">
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus:outline-none">
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <button
          onClick={onDonateClick}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Donate Now
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col">
            <Link href="/" className="text-sm font-medium hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition py-2">
              About Us
            </Link>
            <Link href="/campaigns" className="text-sm font-medium hover:text-primary transition py-2">
              Campaigns
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition py-2">
              Gallery
            </Link>
            <Link href="/documents" className="text-sm font-medium hover:text-primary transition py-2">
              Documents
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition py-2">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}