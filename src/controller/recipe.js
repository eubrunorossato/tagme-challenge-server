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
};
