import recipeModel from '../mongo/schemas/recipe';
export default {
  create: async body => {
    await recipeModel.create(body);
  },
  getAll: async () => {
    return await recipeModel.find();
  },
};
