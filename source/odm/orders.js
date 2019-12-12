// Core
import mongoose from "mongoose";
import v4 from "uuid/v4";

const schema = new mongoose.Schema(
  {
    hash: {
      type: String,
      required: true,
      unique: true,
      default: () => v4()
    },
    uid: {
      type: String,
      required: true
    },
    pid: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    comment: String
  },
  { timestamp: { createdAt: "created", updatedAt: "modified" } }
);

export const orders = mongoose.model("orders", schema);

orders.createIndexes();
