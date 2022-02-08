import redisService from '../services/redis';
export default {
  checkUser: async (req, res) => {
    try {
      const user = await redisService.checkUser(req);
      res.status(200).json({
        user: user,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
