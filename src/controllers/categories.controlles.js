import { Category } from '../models/Category.js';
import { Recipe } from '../models/Recipe.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findOne({
            where: {
                id
            }
        });

        if (!category) return res.status(404).json({message: "Category does not exist"});

        res.json(category);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getCategoryRecipes = async (req, res) => {
    try {
        const { id } = req.params;

        const recipes = await Recipe.findAll({
            where: {
                CategoryId: id
            }
        });

        if (!recipes) return res.status(404).json({message: "Recipes do not exist"});

        res.json(recipes);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const newCategory = await Category.create({
            name
        });
        res.json(newCategory);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findByPK(id);
        category.name = name;
        await category.save();

        res.json(category);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await Category.destroy({
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
