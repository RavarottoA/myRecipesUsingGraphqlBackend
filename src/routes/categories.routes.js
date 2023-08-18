import Router from 'express';
import { getCategories, createCategory, updateCategory, deleteCategory, getCategory, getCategoryRecipes } from '../controllers/categories.controllers.js'; 

const router = Router();

router.get('/categories', getCategories);

router.get('/categories/:id', getCategory);

router.get('/categories/:id/recipes', getCategoryRecipes);

router.post('/categories', createCategory);

router.put('/categories/:id', updateCategory);

router.delete('/categories/:id', deleteCategory);

export default router;
