import { Users } from "../models/Users.js";
import { Recipe } from "../models/Recipe.js";

export const getUserEmail = async (email) => {
    const userEmail = await Users.findOne({
        where: { email }
    });
    return userEmail.get();
};

export const getAllRecipes = async () => {
    const recipes = await Recipe.findAll();
    return recipes;
};
