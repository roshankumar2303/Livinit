import express from "express";

import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";

import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = express.Router();

router.post("/get", AuthController.get);
router.post("/login", AuthController.login);
router.get("/validate", [
    AuthMiddleware.checkAuthorization,
    AuthController.validate,
]);
router.get("/logout", [
    AuthMiddleware.checkAuthorization,
    AuthController.logout,
]);
router.post("/signup", [
    AuthController.signup,
    UserController.signup,
    AuthController.login,
]);

export default router;
