

import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import ContactSubmission from "@/models/ContactSubmission"

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


function getClientIP(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

export async function POST(request: NextRequest) {
  try {
    // Step 1: Connect to MongoDB
    await connectDB()

    // Step 2: Get form data from request
    const { name, email, city, message } = await request.json()

    if (!name || !email || !city || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Validate message length (minimum 10 characters)
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long" },
        { status: 400 }
      )
    }

   
    const contactSubmission = new ContactSubmission({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      city: city.trim(),
      message: message.trim(),
      ipAddress: getClientIP(request),
      status: "new", // Mark as new submission
    })

    // Save to MongoDB
    await contactSubmission.save()

 
    // Step 3: Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will get back to you soon!",
        submissionId: contactSubmission._id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit contact form. Please try again." },
      { status: 500 }
    )
  }
}


export async function GET(request: NextRequest) {
  try {
    await connectDB()

   const submissions = await ContactSubmission.find({})
      .sort({ submittedAt: -1 })
      .limit(100) // Limit to last 100 submissions

    return NextResponse.json({
      success: true,
      count: submissions.length,
      data: submissions,
    })
  } catch (error) {
    console.error("Fetch submissions error:", error)
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    )
  }
}