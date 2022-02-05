import mongoose, { Schema, model } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

const order = new Schema({
  recipe: [
    {
      recipeId: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
      },
      step: {
        type: Number,
        default: 0,
      },
    },
  ],
  status: {
    type: String,
    enum: ['1', '2', '3'],
    default: '1',
  },
});

order.plugin(AutoIncrement, { inc_field: 'number' });

const Order = model('Order', order);

export default Order;
