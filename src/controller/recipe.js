import recipeService from '../services/recipe';
export default {
  create: async (req, res) => {
    try {
      await recipeService.create(req.body);
      res.status(201).json({
        message: 'Receita Criada',
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  getAll: async (req, res) => {
    try {
      const recipes = await recipeService.getAll();
      res.status(201).json({
        recipes,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
