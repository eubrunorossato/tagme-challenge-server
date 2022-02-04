import { Router } from 'express';
import recipeController from './controller/recipe';
import orderController from './controller/order';

const app = Router();

app.post('/create-recipe', recipeController.create);
app.post('/create-order', orderController.create);
app.get('/recipe-get-all', recipeController.getAll);
app.get('/order-get-all', orderController.getAll);

export default app;
