import express from "express";
import { login, redirect } from "../controllers/adminController.js";

const router = express.Router();

router.get("/", redirect);
router.post("/", login);

export default router;
