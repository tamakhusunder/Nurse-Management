import mongoose from "mongoose";

const NurserSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
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

const Nurse = mongoose.model("Nurse", NurserSchema);
export default Nurse;
