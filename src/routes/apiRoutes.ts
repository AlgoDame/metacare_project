import express from "express";
import { CommentController } from "../controllers/comment_controller";

const router = express.Router();
new CommentController().loadRoutes("/movies", router);

export { router as apiRouter };
