import mongoose from "mongoose";

// Yeh hamare database ka blueprint (Schema) hai
const bookingSchema = new mongoose.Schema(
  {
    serviceType: {
      type: String,
      required: true,
    },
    // Agar fuel delivery hai, toh konsa fuel? (Optional)
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", null],
      default: null,
    },
    // Agar fuel delivery hai, toh kitna? (Optional)
    fuelQty: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["Pending", "Assigned", "Completed", "Cancelled"],
      default: "Pending",
    },
    // Future update ke liye: User ki live location save karne ke liye
    location: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { timestamps: true }, // Yeh automatically 'createdAt' aur 'updatedAt' time save karega
);

// Next.js mein models baar-baar compile hote hain, isliye yeh check zaroori hai
const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
