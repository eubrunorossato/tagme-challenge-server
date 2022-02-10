/* eslint-disable no-undef */
import { createResponse } from 'node-mocks-http';
import { recipeReq, recipeFind, recipeById } from './mocks/recipe.mocks';
import recipeController from '../controller/recipe';
import recipeModel from '../db/schemas/recipe';
import 'jest';
jest.mock('../db/schemas/recipe');

let res;
beforeEach(() => {
  res = createResponse();
});

describe('When recipeController.create was called', () => {
  it('it shoul return a status 200 and success message', async () => {
    recipeModel.create.mockImplementation(() => {
      return true;
    });
    await recipeController.create({ ...recipeReq }, res);
    expect(recipeModel.create).toBeCalled();
    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData().message).toBe('Receita Criada');
  });
  it('it shoul return a status 500 and an error message', async () => {
    recipeModel.create.mockImplementation(() => {
      throw new Error('Error');
    });
    await recipeController.create({ ...recipeReq }, res);
    expect(recipeModel.create).toBeCalled();
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().message).toBe('Error');
  });
});

describe('When recipeController.getAll was called', () => {
  it('it shoul return a status 200 and success message', async () => {
    recipeModel.find.mockImplementation(() => {
      return recipeFind;
    });
    await recipeController.getAll({}, res);
    expect(recipeModel.find).toBeCalled();
    expect(res._getStatusCode()).toBe(200);
    expect(Object.keys(res._getJSONData())).toContain('recipes');
  });
  it('it shoul return a status 500 and an error message', async () => {
    recipeModel.find.mockImplementation(() => {
      throw new Error('Error');
    });
    await recipeController.getAll({}, res);
    expect(recipeModel.create).toBeCalled();
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().message).toBe('Error');
  });
});

describe('When recipeController.getById was called', () => {
  it('it shoul return a status 200 and success message', async () => {
    recipeModel.findById.mockImplementation(() => {
      return recipeById;
    });
    await recipeController.getById({ query: { id: 'id' } }, res);
    expect(recipeModel.find).toBeCalled();
    expect(res._getStatusCode()).toBe(200);
    expect(Object.keys(res._getJSONData())).toContain('recipe');
  });
  it('it shoul return a status 500 and an error message', async () => {
    recipeModel.findById.mockImplementation(() => {
      throw new Error('Error');
    });
    await recipeController.getById({ query: { id: 'id' } }, res);
    expect(recipeModel.create).toBeCalled();
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().message).toBe('Error');
  });
});
