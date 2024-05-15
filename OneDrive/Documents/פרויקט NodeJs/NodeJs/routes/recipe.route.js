const { addRecipe, getRecipesByUser, getAllRecipes, getRecipeById, getrecipesByPreparationTime } = require("../controllers/recipe.controller");


const router=express.Router();
router.post('/addRecipe',addRecipe);
router.get('/:id',getRecipeById);
router.get("/", getAllRecipes);
router.get('/userId/:id',getRecipesByUser);
router.get('/getrecipesByPreparationTime/:maxPreparationTime',getrecipesByPreparationTime);
router.put('/:id',auth,updateRecipe);
router.deleteRecipe('/:id',auth,deleteRecipe);


//האם לבדוק את הטוקן גם בהוספה או שרק בעדכון?


module.exports=router;
