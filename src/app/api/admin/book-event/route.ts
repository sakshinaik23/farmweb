
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
   
    await connectDB();

  
    const body = await req.json();
    console.log("BODY RECEIVED:", body); 


    if (!body.eventDate) {
      return NextResponse.json(
        { success: false, message: "Event date required" },
        { status: 400 }
      );
    }

    
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required" },
        { status: 400 }
      );
    }

  
    const booking = await Booking.create({
      ...body,
      bookingType: "event",
      eventDate: new Date(body.eventDate),
    });

    console.log("Booking created:", booking);

    // Return response
    return NextResponse.json({ success: true, booking });
  } catch (error: any) {
    // Show full error in terminal
    console.error(" EVENT BOOKING ERROR:", error);

    // Return actual error message
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}