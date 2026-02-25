// ============================================================================
// API ROUTE: Save Donation Record
// PURPOSE: Store donor info and payment details in MongoDB after successful payment
// METHOD: POST
// ENDPOINT: /api/donations/save
// DATABASE: MongoDB (Donation model)
// ============================================================================

import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Donation from '@/models/Donation'

interface SaveDonationRequest {
  donorName: string
  donorEmail: string
  donorPhone: string
  amount: number
  paymentMethod: string
  razorpayOrderId: string
  razorpayPaymentId: string
  razorpayReceiptId?: string
  transactionSignature?: string
  notes?: string
}

export async function POST(request: NextRequest) {
  try {
    // ====================================================================
    // CONNECT TO MONGODB
    // ====================================================================
    await connectDB()

    // ====================================================================
    // RECEIVE PAYMENT DATA FROM FRONTEND
    // ====================================================================
    const {
      donorName,
      donorEmail,
      donorPhone,
      amount,
      paymentMethod,
      razorpayOrderId,
      razorpayPaymentId,
      razorpayReceiptId,
      transactionSignature,
      notes,
    } = (await request.json()) as SaveDonationRequest

    // ====================================================================
    // VALIDATION - Check all required fields
    // ====================================================================
    if (!donorName || !donorEmail || !donorPhone || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, or amount' },
        { status: 400 }
      )
    }

  
    const donation = new Donation({
      donorName,
      donorEmail,
      donorPhone,
      amount,
      paymentMethod,
      razorpayOrderId,
      razorpayPaymentId,
      razorpayReceiptId,
      transactionSignature,
      paymentStatus: 'completed',
      notes,
    })

    await donation.save()

    // ====================================================================
    // RETURN SUCCESS RESPONSE
    // ====================================================================
    return NextResponse.json({
      success: true,
      message: 'Donation saved successfully',
      donationId: donation._id,
      donorEmail: donation.donorEmail,
    })
  } catch (error) {
    console.error('Error saving donation:', error)
    return NextResponse.json(
      { error: 'Failed to save donation record' },
      { status: 500 }
    )
  }
}
