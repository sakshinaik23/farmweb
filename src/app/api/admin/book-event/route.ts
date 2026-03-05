import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const booking = await Booking.create({
      ...body,
      bookingType: "event",
      eventDate: new Date(body.eventDate),
    });

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Event booking failed" },
      { status: 500 }
    );
  }
}