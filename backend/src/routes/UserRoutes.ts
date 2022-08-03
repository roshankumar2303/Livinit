import express from "express";

import UserController from "../controllers/UserController";

import AuthMiddleware from "../middlewares/AuthMiddleware";
import UserMiddleware from "../middlewares/UserMiddleware";

const router = express.Router();

router.post("/get", [
    AuthMiddleware.checkAuthorization,
    UserMiddleware.authorizeUserDataAccess,
    UserController.get,
]);
router.post("/update", [
    AuthMiddleware.checkAuthorization,
    UserMiddleware.authorizeUserDataAccess,
    UserController.update,
]);
router.delete("/delete", [
    AuthMiddleware.checkAuthorization,
    UserMiddleware.authorizeUserDataAccess,
    UserController.delete,
]);

export default router;
