import { Router } from 'express';
import recipeController from './controller/recipe';

const app = Router();

app.post('/create-recipe', recipeController.create);
app.get('/get-all', recipeController.getAll);

export default app;
