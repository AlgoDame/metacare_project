import express from "express";
import { CommentController } from "../controllers/comment_controller";

const router = express.Router();
new CommentController().loadRoutes("/add", router);

export { router as apiRouter };
