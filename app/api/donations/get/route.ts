
import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Donation from '@/models/Donation'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const donations = await Donation.find({}).sort({ createdAt: -1 })

    const totalDonations = donations.length
    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0)
    const averageDonation =
      totalDonations > 0 ? Math.round(totalAmount / totalDonations) : 0

    return NextResponse.json({
      success: true,
      data: donations,
      statistics: {
        totalDonations,
        totalAmount,
        averageDonation,
      },
    })
  } catch (error) {
    console.error('Error fetching donations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch donations' },
      { status: 500 }
    )
  }
}
