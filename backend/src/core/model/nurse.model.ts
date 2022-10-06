import { time } from "console";
import mongoose from "mongoose";

const NurserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: BigInt,
    required: true,
  },
  workdingDays: {
    type: Number,
    required: true,
  },
  dutyStartTime: {
    type: String,
    required: true,
  },
  dutyEndTime: {
    type: String,
    required: true,
  },
});

const Nurse = mongoose.model("User", NurserSchema);
export default Nurse;
