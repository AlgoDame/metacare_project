import { Request, Response } from "express";
import { CommentService } from "./comment_service";

export class CommentHandler {
    public async process(req: Request, res: Response) {
        try {
            let failedValidation = CommentService.validateComment(req);

            if (failedValidation) {
                return res.status(400).json({
                    status: "Error",
                    data: failedValidation
                });
            }

            let comments = CommentService.processComments(req);

            return res.status(200).json({
                status: "Success",
                data: comments
            });
            
        } catch (error) {
            console.error(`Error occurred in commentHandler::: ${error}`);
        }
    }
}
