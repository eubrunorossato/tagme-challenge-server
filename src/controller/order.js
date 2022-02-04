import orderService from '../services/order';
export default {
  create: async (req, res) => {
    try {
      await orderService.create(req.body);
      res.status(201).json({
        message: 'Pedido Criado',
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  getAll: async (req, res) => {
    try {
      const orders = await orderService.getAll(req.body);
      res.status(200).json({
        orders,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};