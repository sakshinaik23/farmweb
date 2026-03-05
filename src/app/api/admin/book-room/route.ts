import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const overlapping = await Booking.find({
      bookingType: "room",
      status: { $in: ["pending", "confirmed"] },
      checkIn: { $lt: new Date(body.checkOut) },
      checkOut: { $gt: new Date(body.checkIn) },
    });

    if (overlapping.length >= 5) {
      return NextResponse.json(
        { success: false, message: "All rooms booked" },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      ...body,
      bookingType: "room",
      checkIn: new Date(body.checkIn),
      checkOut: new Date(body.checkOut),
    });

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Room booking failed" },
      { status: 500 }
    );
  }
}