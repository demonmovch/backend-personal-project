// Core
import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    pid: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    comment: String,
  },
  { timestamp: { createdAt: 'created', updatedAt: 'modified' } }
);

export const orders = mongoose.model('orders', schema);

orders.createIndexes();
