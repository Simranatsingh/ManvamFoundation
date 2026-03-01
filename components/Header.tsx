"use client"

import React from "react"
import Link from "next/link"
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
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background/80 backdrop-blur border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
            MF
          </div>
          <h1
            className={`text-lg md:text-xl font-black hidden sm:block transition-colors text-foreground`}
          >
            Manvam Foundation
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 text-foreground`}
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
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition">
            Contact Us
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition">
            Blog
          </Link>
        </nav>

        {/* Language Toggle - BACKEND UPDATE: Toggle between Hindi/English */}
        <button
          id="language-toggle"
          className="hidden sm:block text-xs font-semibold px-3 py-1 rounded-full border-2 border-foreground text-foreground hover:bg-foreground/10 transition"
        >
          EN / हिं
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus:outline-none">
          {/* Mobile Menu Icon */}
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition py-2">
              Contact Us
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
