import orderModel from '../mongo/schemas/order';
export default {
  create: async body => {
    await orderModel.create(body);
  },
  getAll: async () => {
    return await orderModel.find();
  },
};
