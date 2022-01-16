import { Request } from "express";
import { commentValidator } from "../../validation/validate_comment";

export class CommentService {
    public static validateComment(req: Request) {
        const validation = commentValidator.validate(req.body);
        const { value, error } = validation;
        let failedValidation;
        error ? (failedValidation = error.message) : (failedValidation = null);
        return failedValidation;
    }

    public static processComments(req: Request) {
        let { comment } = req.body;
        let requester = req.ip;
        return {
            comment: comment,
            request_ip_address: requester
        };
    }
}
