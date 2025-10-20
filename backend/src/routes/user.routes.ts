import { Router } from "express";
import {
  registerUser,
  getUser,
  listUsers,
} from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.get("/:id", authMiddleware, getUser);
router.get("/", authMiddleware, listUsers);

export default router;
