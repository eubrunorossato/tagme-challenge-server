import { Router } from 'express';
import recipeController from './controller/recipe';

const app = Router();

app.post('/create-recipe', recipeController.create);

export default app;
