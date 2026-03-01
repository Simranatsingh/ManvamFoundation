
import mongoose from "mongoose"

const contactSubmissionSchema = new mongoose.Schema({
  // User Information
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  // Location Information
  city: {
    type: String,
    required: true,
    trim: true,
  },

  // Message Content
  message: {
    type: String,
    required: true,
    trim: true,
  },

  // Metadata
  submittedAt: {
    type: Date,
    default: Date.now,
    index: true, // For faster queries
  },

  ipAddress: {
    type: String,
    default: null,
  },

  // Status (for admin tracking)
  status: {
    type: String,
    enum: ["new", "read", "replied"],
    default: "new",
  },

  // Admin reply (if needed)
  adminReply: {
    type: String,
    default: null,
  },
})


export default mongoose.models.ContactSubmission ||
  mongoose.model("ContactSubmission", contactSubmissionSchema)
