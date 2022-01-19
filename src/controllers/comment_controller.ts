import { Request, Response, Router } from "express";
import { CommentHandler } from "../services/comments/comment_handler";

export class CommentController {
    /**
     * Create the routes.
     *
     * @method loadRoutes
     */
    public loadRoutes(prefix: string, router: Router) {
        this.addComments(prefix, router);
        this.listComments(prefix, router);
    }

    private addComments(prefix: string, router: Router): any {
        router.post(
            prefix + "/:episode_id/comment",
            async (req: Request, res: Response) => {
                new CommentHandler().create(req, res);
            }
        );
    }

    private listComments(prefix: string, router: Router){
        router.get(
            prefix + "/comments",
            async (req: Request, res: Response) => {
                new CommentHandler().listComments(req, res);
            }
        );
    }

    
}
