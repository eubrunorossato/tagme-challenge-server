import { Schema, model } from 'mongoose';

const recipe = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quatity: {
        type: String,
        required: true,
      },
    },
  ],
  steps: [
    {
      id: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
});

const Recipe = model('Recipe', recipe);

export default Recipe;
