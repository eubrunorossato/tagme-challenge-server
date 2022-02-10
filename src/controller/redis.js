import redisService from '../services/redis';
export default {
  checkUser: async (req, res, next) => {
    try {
      const user = await redisService.checkUser(req);
      if (user !== null) {
        next();
      } else {
        res.status(200).json({
          user: user,
          message: 'Sesão expirada',
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  logout: async (req, res) => {
    try {
      const user = await redisService.logout(req);
      res.status(200).json({
        user: user,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
