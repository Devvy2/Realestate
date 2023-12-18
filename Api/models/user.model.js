import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
    },

    email: {
      type: "string",
      required: true,
      unique: true,
    },

    password: {
      type: "string",
      required: true,
    },

    avatar: {
      type: "string",
      default:
        "https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGljb258ZW58MHx8MHx8fDA%3D",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
