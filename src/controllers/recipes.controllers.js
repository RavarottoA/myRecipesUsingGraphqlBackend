import { Recipe } from '../models/Recipe.js';

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createRecipe = async (req, res) => {
    const { title, ingredients, description, category, categoryId } = req.body;
    try {
        const newRecipe = await Recipe.create({
            title, ingredients, description, category, categoryId 
        });
        res.json(newRecipe);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


export const getRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findOne({
            where: {id},
        });
        res.json(recipe);
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
};

export const updateRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findOne({
            where: {id},
        });
        recipe.set(req.body);
        await recipe.save();
        return res.json(recipe);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


export const deleteRecipe = async (req, res) => {
    const { id } = req.body;
    console.log("iDDDD: ", id)
    try {
        const result = await Recipe.destroy({
            where: {id},
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
