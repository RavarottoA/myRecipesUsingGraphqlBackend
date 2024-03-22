import { getAllRecipes } from '../services/services.js';

export const getRecipes = async (req, res) => {
    try {
        const recipes = await getAllRecipes();
        res.json(recipes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

