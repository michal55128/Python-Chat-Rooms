const { getAllCategories, getCategoriesWithRecipes, getCategoryById } = require("../controllers/category.controller");




const router=express.Router();
router.get('/:id',getCategoryById);
router.get("/",getAllCategories);
router.get('/categoriesWithRecipes',getCategoriesWithRecipes);



module.exports=router;