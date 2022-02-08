import userService from '../services/user';
export default {
  authUser: async (req, res) => {
    try {
      const response = await userService.authUser(req);
      res.status(200).json({
        user: response,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
