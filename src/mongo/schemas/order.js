import mongoose, { Schema, model } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const order = new Schema({
  recipe: [
    {
      recipeId: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true,
      },
      step: {
        type: Number,
        default: 0,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ['1', '2', '3'],
    default: '1',
    required: true,
  },
  createAt: {
    time: {
      type: Date,
      default: Date.now,
    },
  },
  updatedAt: {
    time: {
      type: Date,
      default: Date.now,
    },
  },
});

order.plugin(AutoIncrement, { inc_field: 'number' });

const Order = model('Order', order);

export default Order;
