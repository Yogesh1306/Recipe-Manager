import { Router } from "express";
import {
  googleLogin,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controllers.js";
import { jwtAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/google").post(googleLogin);

//secure routes
router.route("/logout").post(jwtAuth, logoutUser);

export default router;
