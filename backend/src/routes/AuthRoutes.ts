import express from "express";

import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";

const router = express.Router();

router.post("/get", AuthController.get);
router.post("/login", AuthController.login);
router.post("/signup", [AuthController.signup, UserController.signup]);

export default router;
