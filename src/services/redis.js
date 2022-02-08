import redis from '../db/redis';
export default {
  registerUser: async user => {
    await redis.set(user, true, 'EX', 10);
  },
  checkUser: async user => {
    return await redis.get(user);
  },
};
