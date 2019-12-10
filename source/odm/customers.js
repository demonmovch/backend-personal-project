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
    name: {
      first: {
        type: String,
        required: true
      },
      last: {
        type: String,
        required: true
      }
    },
    emails: [
      {
        email: {
          type: String,
          unique: true,
          required: true
        },
        primary: Boolean
      }
    ],
    phones: [
      {
        phone: {
          type: String,
          required: true
        },
        primary: Boolean
      }
    ],
    city: String,
    country: String,
    password: {
      type: String,
      select: false,
      required: true
    }
  },
  { timestamp: { createdAt: "created", updatedAt: "modified" } }
);
schema.index({ "name.first": 1, "name.last": 1 }, { name: "flName" });
schema.index({
  "name.first": "text",
  "name.last": "text",
  city: "text",
  country: "text"
});

export const customers = mongoose.model("customers", schema);

customers.createIndexes();
