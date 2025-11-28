import { Router } from "express";
import { jwtAuth } from "../middlewares/auth.middleware.js";
import {
  addToFavorites,
  createRecipe,
  deleteRecipe,
  getAllRecipe,
  getARecipe,
  removeFromFavorites,
  searchByTitle,
  updateRecipeImg,
} from "../controllers/recipe.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/").get(getAllRecipe);
router.route("/searchByTitle").get(searchByTitle);
router.route("/:id").get(getARecipe);

//secure routes
router.route("/").post(jwtAuth, upload.single("recipeImg"), createRecipe);
router
  .route("/updateImg/:recipeId")
  .put(jwtAuth, upload.single("recipeImg"), updateRecipeImg);
router.route("/deleteRecipe/:id").delete(jwtAuth, deleteRecipe);
router.route("/favorites/:id").put(jwtAuth, addToFavorites);
router.route("/favorites/:id").delete(jwtAuth, removeFromFavorites);

export default router;
