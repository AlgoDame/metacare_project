import { Request, Response } from "express";
import { BaseService } from "../baseService";
import { CommentService } from "./comment_service";

export class CommentHandler extends BaseService {
    public async process(req: Request, res: Response) {
        try {
            let failedValidation = CommentService.validateComment(req);

            if (failedValidation) return this.sendError(req, res, 400, failedValidation);

            let comments = CommentService.processComments(req);

            return this.sendResponse(req, res, 200, comments);
            

        } catch (error) {
            console.error(`Error occurred in commentHandler::: ${error}`);
            return this.sendError(req, res, 500, error);
        }
    }
}
