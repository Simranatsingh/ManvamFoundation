// ============================================================================
// COMPONENT: Footer
// PURPOSE: Footer section visible on all pages
// INCLUDES: Contact info, social media links, copyright
// ============================================================================

"use client"

import { Mail, Phone, MapPin, Youtube, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* ============================================================ */}
          {/* CONTACT INFORMATION SECTION */}
          {/* BACKEND UPDATE: Edit address, phone, or email here */}
          {/* ============================================================ */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="text-sm">
                  {/* BACKEND UPDATE: Change address here */}
                  Village Siktaha, Post Siktaha Ghanghata, Sant Kabir Nagar, Uttar Pradesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <a href="tel:9935513959" className="hover:underline text-sm">
                  {/* BACKEND UPDATE: Change phone number here */}
                  9935513959
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:manvamfoundation@gmail.com" className="hover:underline text-sm">
                  {/* BACKEND UPDATE: Change email here */}
                  manvamfoundation@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SOCIAL MEDIA SECTION */}
          {/* Links: Facebook, Twitter (X), YouTube */}
          {/* BACKEND UPDATE: Add/remove social links here */}
          {/* ============================================================ */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-6">
              {/* Facebook Link - BACKEND UPDATE: Change Facebook URL here */}
              <a
                href="https://www.facebook.com/profile.php?id=61582535221460"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                aria-label="Follow on Facebook"
              >
                <Facebook size={24} />
              </a>

              {/* Twitter (X) Link */}
              <a
                href="https://x.com/ManvamFdn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                aria-label="Follow on Twitter"
              >
                <Twitter size={24} />
              </a>

              {/* YouTube Link */}
              <a
                href="https://www.youtube.com/@ManvamFoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
                aria-label="Subscribe on YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © 2025 Manvam Foundation. All rights reserved. Empowering communities, transforming lives.
          </p>
        </div>
      </div>
    </footer>
  )
}
