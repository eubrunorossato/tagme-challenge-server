import userModel from '../db/schemas/user';
import redisService from '../services/redis';

function formatAuthString(authString) {
  return authString.replace('Basic ', '');
}

function splitStringAuth(stringAuth) {
  const stringSplited = stringAuth.split(':');
  return {
    user: stringSplited[0],
    password: stringSplited[1],
  };
}

export default {
  authUser: async req => {
    const { authorization } = req.headers;
    const base64Auth = formatAuthString(authorization);
    const stringAuth = Buffer.from(base64Auth, 'base64').toString();
    const userObject = splitStringAuth(stringAuth);
    const user = await userModel.findOne({
      user: userObject.user,
      password: userObject.password,
    });
    if (user === null || !user) {
      return false;
    }
    await redisService.registerUser(user.user);
    return user.user;
  },
};
