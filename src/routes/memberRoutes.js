import express from "express";
import { authMiddleware, adminOnly } from "../middlewares/authMiddleware.js";
import {
  getAllMembers,
  registerMember,
  removeMember,
  loginMember,
  verifyMember,
  unverifyMember,
} from "../controllers/memberController.js";

const router = express.Router();

router.get("/", authMiddleware, adminOnly, getAllMembers);
router.post("/", registerMember);
router.post("/login", loginMember);
router.post("/verify/:id", authMiddleware, adminOnly, verifyMember);
router.post("/unverify/:id", authMiddleware, adminOnly, unverifyMember);
router.delete("/:id", authMiddleware, adminOnly, removeMember);

export default router;
