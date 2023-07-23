import { Recipe } from "../models/Recipe.js";

export const getRecipesService = async () => {
    const recipes = await Recipe.findAll();
    return recipes;
};
