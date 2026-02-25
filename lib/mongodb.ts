// ============================================================================
// MONGODB CONNECTION
// PURPOSE: Connect to MongoDB database and manage connections
// LOCATION: Used by all API routes that need database access
// ============================================================================

import mongoose from 'mongoose'

// ============================================================================
// CONFIGURATION
// ============================================================================
const MONGODB_URI = process.env.MONGODB_URI

// Check if connection string is provided
if (!MONGODB_URI) {
  throw new Error(
    'Please define MONGODB_URI in .env.local file. See SETUP_README.md for instructions.'
  )
}

// ============================================================================
// CONNECTION MANAGEMENT
// Global mongoose object to manage connection state
// ============================================================================
let cached = global.mongoose as any

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

// ============================================================================
// CONNECT TO DATABASE FUNCTION
// Call this at the start of any API route that needs database access
// ============================================================================
export async function connectDB() {
  // If already connected, return existing connection
  if (cached.conn) {
    return cached.conn
  }

  // If connection promise exists, wait for it
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI)
  }

  // Wait for connection and cache it
  cached.conn = await cached.promise
  return cached.conn
}
