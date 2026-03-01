
"use client"

import { useState } from "react"
import { X } from "lucide-react"
import PaymentDetailsPage from "./PaymentDetailsPage"

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {

  const [step, setStep] = useState<"form" | "payment-details">("form")
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    phone: "",
    amount: "" 
  })
  const [errors, setErrors] = useState({ 
    name: "", 
    email: "",
    phone: "",
    amount: "" 
  })
  const [loading, setLoading] = useState(false)
  const [paymentData, setPaymentData] = useState<{
    name: string
    email: string
    phone: string
    amount: number
  } | null>(null)

  if (!isOpen) return null

 
  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", amount: "" }
    let isValid = true

    // Check name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    // Check email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    // Check phone (India format: 10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      isValid = false
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
      isValid = false
    }

    // Check amount
    if (!formData.amount.trim()) {
      newErrors.amount = "Donation amount is required"
      isValid = false
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleNext = async () => {
    if (validateForm()) {
      setLoading(true)
      try {
        // Save donor information to MongoDB
        const response = await fetch("/api/donations/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            donorName: formData.name,
            donorEmail: formData.email,
            donorPhone: formData.phone,
            amount: Number(formData.amount),
            paymentMethod: "Manual Transfer",
            status: "pending",
          }),
        })

        const data = await response.json()

        if (response.ok) {
          // Success - Show payment details page
          setPaymentData({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            amount: Number(formData.amount),
          })
          setStep("payment-details")
        } else {
          alert(data.error || "Failed to process donation")
        }
      } catch (error) {
        console.error("Donation error:", error)
        alert("Failed to process donation. Please try again.")
      } finally {
        setLoading(false)
      }
    }
  }

  const handleBackFromPayment = () => {
    setPaymentData(null)
    setStep("form")
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-foreground/60 hover:text-foreground">
          <X size={24} />
        </button>

        {step === "form" ? (
          <>
            <h2 className="text-2xl font-bold text-foreground mb-6">Donate to Manvam Foundation</h2>

            <div className="space-y-4">
              {/* Full Name Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email Address Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  maxLength={10}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Donation Amount Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Donation Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter amount in rupees"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  min="1"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
                />
                {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
              </div>

              <button
                onClick={handleNext}
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground py-2 rounded-lg font-semibold transition mt-6"
              >
                {loading ? "Processing..." : "Continue to Payment"}
              </button>
            </div>
          </>
        ) : step === "payment-details" && paymentData ? (
          <PaymentDetailsPage
            donorData={paymentData}
            onBack={handleBackFromPayment}
          />
        ) : null}
      </div>
    </div>
  )
}
