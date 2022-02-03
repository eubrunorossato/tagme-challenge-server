import { Schema, model } from 'mongoose';

const order = new Schema({
  name: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quatity: {
        type: String,
        required: true,
      },
    },
  ],
  steps: [
    {
      id: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
});

const Order = model('Order', order);

export default Order;
