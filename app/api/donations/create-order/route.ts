
import { NextRequest, NextResponse } from 'next/server'

interface CreateOrderRequest {
  amount: number
  donorName: string
  donorEmail: string
  donorPhone: string
  notes?: string
}

export async function POST(request: NextRequest) {
  try {
     const { amount, donorName, donorEmail, donorPhone, notes } =
      (await request.json()) as CreateOrderRequest

    if (!amount || amount < 10) {
      return NextResponse.json(
        { error: 'Amount must be at least ₹10' },
        { status: 400 }
      )
    }

    if (!donorName || !donorEmail || !donorPhone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

  return NextResponse.json({
      success: false,
      message: 'Razorpay integration required. See comments in this file.',
      orderId: null,
    })


  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
