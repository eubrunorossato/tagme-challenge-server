import redis from '../db/redis';
export default {
  registerUser: async user => {
    await redis.set(user, true, 'EX', 10);
  },
  checkUser: async req => {
    const { authorization } = req.headers;
    return await redis.get(authorization);
  },
};
