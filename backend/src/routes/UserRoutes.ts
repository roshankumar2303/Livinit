import express from "express";

import UserController from "../controllers/UserController";

import AuthMiddleware from "../middlewares/AuthMiddleware";
import UserMiddleware from "../middlewares/UserMiddleware";

const router = express.Router();

router.post("/get", [
    AuthMiddleware.verifyToken,
    UserMiddleware.authorizeUserDataAccess,
    UserController.get,
]);
router.post("/update", [
    AuthMiddleware.verifyToken,
    UserMiddleware.authorizeUserDataAccess,
    UserController.update,
]);
router.delete("/delete", [
    AuthMiddleware.verifyToken,
    UserMiddleware.authorizeUserDataAccess,
    UserController.delete,
]);

export default router;
