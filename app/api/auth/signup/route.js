import connectToDatabase from "../../../../lib/mongodb";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;
    const phone = body.phone?.trim();
    const role = body.role?.trim().toUpperCase();

    if (!name || !email || !password || !phone || !role) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!["CUSTOMER", "PARTNER"].includes(role)) {
      return NextResponse.json(
        { success: false, message: "Role must be CUSTOMER or PARTNER." },
        { status: 400 },
      );
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid 10-digit Indian phone number.",
        },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 6 characters long.",
        },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User with this email already exists." },
        { status: 409 },
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone: user.phone,
      role,
    });

    await newUser.save();

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully!",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Signup API Error:", error);

    if (
      error?.name === "MongoServerError" ||
      error?.message?.includes("bad auth") ||
      error?.message?.includes("Authentication failed")
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Database authentication failed. Please check MongoDB Atlas credentials.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal Server Error. Please try again." },
      { status: 500 },
    );
  }
}
