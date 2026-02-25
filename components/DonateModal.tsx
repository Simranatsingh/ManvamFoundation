// ============================================================================
// COMPONENT: DonateModal
// PURPOSE: Popup modal for donation with 2-step process (form → payment)
// STEP 1: Collect donor name and email
// STEP 2: Display payment method options
// USAGE: Triggered by "Donate Now" button in Header and Hero sections
// BACKEND UPDATE GUIDE: See SETUP_GUIDE.md for payment gateway integration
// ============================================================================

"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  // ============================================================================
  // DONATION FORM STATE MANAGEMENT
  // step: "form" (collect name/email/phone) or "payment" (select payment method)
  // formData: Donor name, email, and phone number
  // errors: Validation error messages
  // loading: Shows loading state during payment processing
  // ============================================================================
  const [step, setStep] = useState<"form" | "payment">("form")
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    phone: "" 
  })
  const [errors, setErrors] = useState({ 
    name: "", 
    email: "",
    phone: "" 
  })
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  // ============================================================================
  // FORM VALIDATION - Check all required fields
  // ============================================================================
  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" }
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

    setErrors(newErrors)
    return isValid
  }

  const handleNext = () => {
    if (validateForm()) {
      setStep("payment")
    }
  }

  // ============================================================================
  // HANDLE PAYMENT - Called when user selects payment method
  // This integrates with Razorpay to process the donation
  // ============================================================================
  const handlePaymentMethod = async (method: string) => {
    setLoading(true)
    try {
      // Step 1: Create order from backend
      const orderResponse = await fetch('/api/donations/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 500, // Default amount - BACKEND UPDATE: Make this dynamic
          donorName: formData.name,
          donorEmail: formData.email,
          donorPhone: formData.phone,
          notes: `Payment via ${method}`,
        }),
      })

      const orderData = await orderResponse.json()

      // BACKEND UPDATE: Razorpay integration
      // When Razorpay is integrated, use this code:
      // if (!window.Razorpay) {
      //   alert('Payment gateway not loaded')
      //   return
      // }
      //
      // const options = {
      //   key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      //   order_id: orderData.orderId,
      //   handler: async (response: any) => {
      //     // Save donation to database
      //     await fetch('/api/donations/save', {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({
      //         donorName: formData.name,
      //         donorEmail: formData.email,
      //         donorPhone: formData.phone,
      //         amount: 500,
      //         paymentMethod: method,
      //         razorpayOrderId: orderData.orderId,
      //         razorpayPaymentId: response.razorpay_payment_id,
      //         razorpayReceiptId: orderData.receipt,
      //         transactionSignature: response.razorpay_signature,
      //       }),
      //     })
      //     alert('Payment successful! Thank you for your donation.')
      //     onClose()
      //   },
      // }
      //
      // const razorpay = new window.Razorpay(options)
      // razorpay.open()

      alert(`Payment method: ${method}\nBackend ready for Razorpay integration`)
      onClose()
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
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

              {/* Phone Number Input - BACKEND UPDATE: Required for donation tracking */}
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

              <button
                onClick={handleNext}
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-primary-foreground py-2 rounded-lg font-semibold transition mt-6"
              >
                Continue to Payment
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-foreground mb-2">Choose Payment Method</h2>
            <p className="text-foreground/70 text-sm mb-6">Donating as {formData.name}</p>

            <div className="space-y-3">
              {/* UPI Payment */}
              <button
                onClick={() => handlePaymentMethod("UPI")}
                disabled={loading}
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50 py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Processing..." : "UPI Payment"}
              </button>

              {/* Credit/Debit Card */}
              <button
                onClick={() => handlePaymentMethod("Credit Card")}
                disabled={loading}
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50 py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Processing..." : "Credit / Debit Card"}
              </button>

              {/* Net Banking */}
              <button
                onClick={() => handlePaymentMethod("Net Banking")}
                disabled={loading}
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50 py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Processing..." : "Net Banking"}
              </button>

              {/* Digital Wallet */}
              <button
                onClick={() => handlePaymentMethod("Wallet")}
                disabled={loading}
                className="w-full border-2 border-primary text-primary hover:bg-primary/10 disabled:opacity-50 py-3 rounded-lg font-semibold transition"
              >
                {loading ? "Processing..." : "Digital Wallet"}
              </button>

              {/* Back Button */}
              <button
                onClick={() => setStep("form")}
                disabled={loading}
                className="w-full mt-4 text-foreground/70 disabled:opacity-50 py-2 rounded-lg font-semibold hover:text-foreground transition"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
