import mongoose, { Schema } from "mongoose";

const emailRegex = /.+\@.+\..+/;

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: {
      type: String,
      required: function () {
        return this.provider === "local";
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [emailRegex, "enter a valid email"],
    },
    provider: {
      type: String,
      enum: ["local", "google"],
      required: true,
      default: "local",
    },
    googleId: {
      type: String,
      required: function () {
        return this.provider === "google";
      },
      unique: function () {
        return this.provider === "google";
      },
      sparse: true,
    },
    address: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.index({ email: 1 }, { unique: true });

export default mongoose.model("User", UserSchema);
