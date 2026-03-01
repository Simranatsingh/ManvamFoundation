

"use client"

import { ArrowLeft, Copy, Download } from "lucide-react"
import { useState } from "react"

interface PaymentDetailsPageProps {
  donorData: {
    name: string
    email: string
    phone: string
    amount: number
  }
  onBack: () => void
}

export default function PaymentDetailsPage({
  donorData,
  onBack,
}: PaymentDetailsPageProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)


  const bankDetails = {
    bankName: "HDFC Bank Limited",
    accountHolder: "Manvam Foundation",
    accountNumber: "44910447129", // BACKEND UPDATE: Replace with actual account number
    ifscCode: "SBIN0009599", // BACKEND UPDATE: Replace with actual IFSC code
    // upiId: "manvam.foundation@hdfc", // BACKEND UPDATE: Replace with actual UPI ID
    accountType: "Savings Account",
  }


  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Payment Details</h2>
        <button
          onClick={onBack}
          className="text-foreground/60 hover:text-foreground"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      <p className="text-foreground/70 text-sm">
        Thank you for your donation of <span className="font-semibold">₹{donorData.amount}</span>, <span className="font-semibold">{donorData.name}</span>!
      </p>

      {/* ================================================================ */}
        {/* MAIN CONTENT */}
        {/* ================================================================ */}
        <div className="p-6 space-y-8">
          {/* QR Code Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Scan to Pay
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-8 border-2 border-dashed border-primary/30 flex flex-col items-center">
              {/* ========================================================== */}
              {/* QR CODE IMAGE */}
              {/* BACKEND UPDATE: QR image path - Replace with your actual QR code */}
              {/* Current path: /public/images/QR.jpeg */}
              {/* How to add QR:
                  1. Upload your QR image to /public/images/
                  2. Name it: QR.jpeg
                  3. The path below will automatically show it */}
              {/* ========================================================== */}
              <img
                src="/images/QR.jpeg"
                alt="Payment QR Code - Scan to donate"
                className="w-64 h-64 object-contain mb-4"
                onError={(e) => {
                  // Show placeholder if image not found
                  const target = e.target as HTMLImageElement
                  target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Crect fill='%23f0f0f0' width='256' height='256'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23999' text-anchor='middle' dy='.3em'%3EQR Code Placeholder%3C/text%3E%3C/svg%3E"
                }}
              />
              <p className="text-foreground/60 text-center">
                Scan this QR code with your phone to make payment
              </p>
            </div>
          </div>

          {/* Bank Transfer Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Bank Transfer Details
            </h2>
            <div className="space-y-3">
              {/* Bank Name */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-foreground/60 uppercase font-semibold mb-1">
                  Bank Name
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-foreground">
                    {bankDetails.bankName}
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(bankDetails.bankName, "bankName")
                    }
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
                {copiedField === "bankName" && (
                  <p className="text-xs text-green-600 mt-1">Copied!</p>
                )}
              </div>

              {/* Account Holder Name */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-foreground/60 uppercase font-semibold mb-1">
                  Account Holder
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-foreground">
                    {bankDetails.accountHolder}
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(bankDetails.accountHolder, "accountHolder")
                    }
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
                {copiedField === "accountHolder" && (
                  <p className="text-xs text-green-600 mt-1">Copied!</p>
                )}
              </div>

              {/* Account Number */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-foreground/60 uppercase font-semibold mb-1">
                  Account Number
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-foreground font-mono">
                    {bankDetails.accountNumber}
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(bankDetails.accountNumber, "accountNumber")
                    }
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
                {copiedField === "accountNumber" && (
                  <p className="text-xs text-green-600 mt-1">Copied!</p>
                )}
              </div>

              {/* IFSC Code */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-foreground/60 uppercase font-semibold mb-1">
                  IFSC Code
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-foreground font-mono">
                    {bankDetails.ifscCode}
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(bankDetails.ifscCode, "ifscCode")
                    }
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
                {copiedField === "ifscCode" && (
                  <p className="text-xs text-green-600 mt-1">Copied!</p>
                )}
              </div>

              {/* UPI ID */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-foreground/60 uppercase font-semibold mb-1">
                  UPI ID (for quick transfer)
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-foreground font-mono">
                    {bankDetails.upiId}
                  </p>
                  <button
                    onClick={() => copyToClipboard(bankDetails.upiId, "upiId")}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
                {copiedField === "upiId" && (
                  <p className="text-xs text-green-600 mt-1">Copied!</p>
                )}
              </div>

              {/* Account Type */}
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs text-foreground/60 uppercase font-semibold mb-1">
                  Account Type
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {bankDetails.accountType}
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <h3 className="font-bold text-amber-900 mb-2">Important:</h3>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>
                • Please note the account details carefully before making the
                transfer
              </li>
              <li>
                • Your donation receipt will be sent to {donorData.email}
              </li>
              <li>
                • Please contact us at manvamfoundation@gmail.com for any
                queries
              </li>
              <li>
                • We are registered as an NGO - donations are tax-deductible
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onBack}
              className="flex-1 bg-foreground/10 hover:bg-foreground/20 text-foreground py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Form
            </button>
            <button
              onClick={() => {
                // BACKEND UPDATE: You can add functionality to download payment receipt here
                alert(
                  `Thank you ${donorData.name}! Payment receipt will be sent to ${donorData.email}`
                )
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    
  )
}
