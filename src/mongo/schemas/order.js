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
  isDone: {
    type: Boolean,
    default: false,
  },
});

order.plugin(AutoIncrement, { inc_field: 'number' });

const Order = model('Order', order);

export default Order;
