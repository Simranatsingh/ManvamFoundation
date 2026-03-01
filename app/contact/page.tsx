"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import DonateModal from "@/components/DonateModal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showDonateModal, setShowDonateModal] = useState(false)

  const validateForm = (): boolean => {
    const newErrors = { name: "", email: "", city: "", message: "" }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", city: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert(data.error || "Failed to submit form.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Failed to submit form.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <main className="w-full pt-20 pb-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-b border-border">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have a question or want to learn more about our work? We would
              love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">

              <div className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-sm text-foreground/70">
                      Village Siktaha, Sant Kabir Nagar, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary" size={24} />
                  <a href="tel:9935513959">9935513959</a>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary" size={24} />
                  <a href="mailto:manvamfoundation@gmail.com">
                    manvamfoundation@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => setShowDonateModal(true)}
                className="w-full bg-primary text-white py-2 rounded"
              >
                Donate Now
              </button>

            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-card rounded-lg border border-border p-8">
              {submitted && (
                <div className="mb-4 text-green-600">
                  <CheckCircle size={18} className="inline mr-2" />
                  Message Sent Successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
                {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}

                <textarea
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-2 rounded"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
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