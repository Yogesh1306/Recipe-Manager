import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    steps: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    img: {
      type: String,
      required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timestamps: true }
);

export const Recipe = new mongoose.model("Recipe", recipeSchema);
