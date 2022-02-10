import { Router } from 'express';
import recipeController from './controller/recipe';
import userController from './controller/user';
import redisController from './controller/redis';

const app = Router();

app.post('/create-recipe', redisController.checkUser, recipeController.create);
app.get('/recipe-get-all', redisController.checkUser, recipeController.getAll);
app.get('/recipe-get', redisController.checkUser, recipeController.getById);
app.get('/logout', redisController.checkUser, redisController.logout);
app.post('/user-auth', userController.authUser);
app.post('/check-user', redisController.checkUser);

export default app;
