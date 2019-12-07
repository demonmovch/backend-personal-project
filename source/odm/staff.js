// Core
import mongoose from 'mongoose';
import v4 from 'uuid/v4';

const schema = new mongoose.Schema(
  {
    hash: {
      type: String,
      required: true,
      unique: true,
      default: () => v4(),
    },
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    emails: [
      {
        email: {
          type: String,
          unique: true,
          required: true,
        },
        primary: Boolean,
      },
    ],
    phones: [
      {
        phone: {
          type: String,
          required: true,
        },
        primary: Boolean,
      },
    ],
    password: {
      type: String,
      select: false,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },

    disabled: Boolean,
  },
  { timestamp: { createdAt: 'created', updatedAt: 'modified' } }
);
schema.index({ 'name.first': 1, 'name.last': 1 }, { name: 'flName' });
schema.index({ 'name.first': 'text' }, { 'name.last': 'text' });

export const staff = mongoose.model('staff', schema);

staff.createIndexes();
