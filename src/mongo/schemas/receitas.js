import { Schema, model } from 'mongoose';

const transactions = new Schema({
  isReceived: {
    type: Boolean,
    required: true,
  },
  quoteReference: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  requestedAt: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  productList: {
    type: Object,
    required: true,
  },
  xml: {
    type: String,
    required: true,
  },
  OpportunityId: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
});

const transaction = model('Transaction', transactions);

export default transaction;
