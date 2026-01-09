import mongoose from "mongoose";

const useSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    //   unique: true,
    },
    phone: {
      type: String,
      required: true,
    //   unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const User=mongoose.model("User",useSchema);

export default User;