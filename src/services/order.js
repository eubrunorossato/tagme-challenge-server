import orderModel from '../db/schemas/order';
export default {
  create: async body => {
    await orderModel.create(body);
  },
  update: async body => {
    return orderModel.updateOne(
      { 'recipe._id': body.itemId },
      {
        $set: {
          'recipe.$.step': body.step,
        },
      }
    );
  },
  getAll: async () => {
    return await orderModel.find().populate('recipe.recipeId');
  },
};
