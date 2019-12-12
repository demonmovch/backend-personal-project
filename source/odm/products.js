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
    title: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      required: true
    },
    discount: Number,
    total: {
      type: Number,
      required: true
    }
  },
  { timestamp: { createdAt: "created", updatedAt: "modified" } }
);

export const products = mongoose.model("products", schema);

products.createIndexes();
