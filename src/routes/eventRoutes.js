import express from "express";
import {
  authMiddleware,
  adminOnly,
  loadMember,
} from "../middlewares/authMiddleware.js";
import {
  getEvents,
  createEvent,
  deleteEvent,
  joinEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", authMiddleware, adminOnly, createEvent);
router.post("/join/:id", authMiddleware, loadMember, joinEvent);
router.delete("/:id", authMiddleware, adminOnly, deleteEvent);

export default router;
