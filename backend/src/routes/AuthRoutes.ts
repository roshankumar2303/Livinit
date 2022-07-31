import express from "express";

import AuthController from "../controllers/AuthController";

const router = express.Router();

router.post("/get", AuthController.get);
router.get("/get-all", AuthController.getAll);
router.post("/insert", AuthController.insert);
router.post("/update", AuthController.update);
router.delete("/delete", AuthController.delete);

export default router;
