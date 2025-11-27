import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Recipe } from "../models/recipe.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createRecipe = asyncHandler(async (req, res) => {
  const { title, description, ingredients, steps, tags } = req.body;

  const imgLocalPath = req.file?.path;
  if (!imgLocalPath) {
    throw new ApiError(400, "Recipe img is required!!");
  }

  const img = await uploadOnCloudinary(imgLocalPath);
  if (!img) {
    throw new ApiError(400, "Error while uploading Recipe img to cloudinary");
  }

  const recipe = await Recipe.create({
    title,
    description,
    ingredients,
    steps,
    tags,
    img: img.url,
    user: req.user,
  });

  const createdRecipe = await Recipe.findOne(recipe?._id);
  if (!createdRecipe) {
    throw new ApiError(
      500,
      "Something went wrong while creating the recipe...Try again!!"
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdRecipe, "Created successfully!!"));
});

const updateRecipeImg = asyncHandler(async (req, res) => {
  const recipeId = req.params.recipeId;

  const recipe = await Recipe.findById({ _id: recipeId, user: req.user._id });
  if (!recipe) {
    throw new ApiError(404, "No data available");
  }

  const imgLocalPath = req.file?.path;
  if (!imgLocalPath) {
    throw new ApiError(400, "Recipe img is required!!");
  }
  const img = await uploadOnCloudinary(imgLocalPath);
  if (!img) {
    throw new ApiError(400, "Error while uploading Recipe img to cloudinary");
  }
  const updatedImg = await Recipe.findByIdAndUpdate(
    recipe._id,
    {
      $set: {
        img: img.url,
      },
    },
    { new: true }
  );
  return res
    .status(200)
    .json(new ApiResponse(200, updatedImg, "Img updated successfully"));
});

const deleteRecipe = asyncHandler(async (req, res) => {
  const recipeId = req.params.id;
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) {
    throw new ApiError(404, "Recipe not found!!");
  }
  const deletedRecipe = await Recipe.findByIdAndDelete(recipe._id, {
    new: true,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, deletedRecipe, "Recipe deleted successfully"));
});

const getAllRecipe = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find()
    .populate("user", "username")
    .sort({ favoritesCount: -1 })
    .skip(0)
    .limit(10);
  return res
    .status(200)
    .json(new ApiResponse(200, recipes, "All recipe retrieved"));
});

const addToFavorites = asyncHandler(async (req, res) => {
  const recipeId = req.params.id;
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) {
    throw new ApiError(404, "No data available");
  }
  recipe.favoritesCount += 1;
  await Recipe.save({ validateBeforeSave: false });
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: { favorites: recipe._id },
    },
    { new: true }
  );
});

export {
  createRecipe,
  updateRecipeImg,
  deleteRecipe,
  getAllRecipe,
  addToFavorites,
};
