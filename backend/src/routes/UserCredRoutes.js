import express from "express";
import UserCredController from "../controllers/UserCredController";

const router = express.Router()

router.get('/get-all', UserCredController.getAll);
router.post('/find', UserCredController.find);
router.post('/insert', UserCredController.insert);
router.post('/update', UserCredController.update);
router.delete('/delete', UserCredController.delete);

export default router;