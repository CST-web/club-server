import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  activity: {
    type: String,
    enum: [
      "Échecs",
      "Robotique",
      "Prix du meilleur TIPE",
      "Ateliers d'innovation",
    ],
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  memberLimit: { type: Number, required: true },
  members: { type: [String], default: [] },
});

export default mongoose.model("Event", eventSchema);
