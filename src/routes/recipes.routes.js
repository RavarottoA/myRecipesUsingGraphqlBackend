import Router from 'express';
import { getRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe } from '../controllers/recipes.controllers.js'; 

const router = Router();

router.get('/recipes', getRecipes);
router.post('/recipe', createRecipe);
router.put('/recipe/:id', updateRecipe);
router.delete('/recipes', deleteRecipe);
router.get('/recipe/:id', getRecipe);

export default router;
