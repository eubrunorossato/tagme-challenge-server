import { Router } from 'express';
import recipeController from './controller/recipe';
import orderController from './controller/order';
import userController from './controller/user';
import orderValidator from './middleware/order';
import redisController from './controller/redis';

const app = Router();

app.post('/create-recipe', recipeController.create);
app.post('/create-order', orderController.create);
app.put('/update-order', orderValidator.update, orderController.update);
app.get('/recipe-get-all', recipeController.getAll);
app.get('/order-get-all', orderController.getAll);
app.post('/user-auth', userController.authUser);
app.post('/check-user', redisController.checkUser);

export default app;
