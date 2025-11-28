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

const router = Router();

router.route("/").get(getAllRecipe);
router.route("/:id").get(getARecipe);
router.route("/searchByTitle").get(searchByTitle);

//secure routes
router.route("/").post(jwtAuth, createRecipe);
router.route("/updateImg/:recipeId").put(jwtAuth, updateRecipeImg);
router.route("/:id").delete(jwtAuth, deleteRecipe);
router.route("/addToFavorites/:id").put(jwtAuth, addToFavorites);
router.route("/removeFromFavorites/:id").put(jwtAuth, removeFromFavorites);

export default router;
