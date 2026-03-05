import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },

    bookingType: {
      type: String,
      enum: ["room", "event"],
      required: true,
    },

    checkIn: Date,
    checkOut: Date,

    eventType: String,
    eventDate: Date,
    message: String,

    guests: { type: Number, default: 1 },
    totalAmount: { type: Number, default: 0 },
    advancePaid: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);