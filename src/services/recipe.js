import recipeModel from '../db/schemas/recipe';
export default {
  create: async body => {
    await recipeModel.create(body);
  },
  getAll: async () => {
    return await recipeModel.find();
  },
  getById: async id => {
    return await recipeModel.findById({ _id: id });
  },
};
