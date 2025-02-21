import { Request, Response, Router } from "express";
import { GenerateResponse } from "../utils/response.creator";
import blogRouter from "./blog.routre";

const mainRouter: Router = Router();

// Add routes defined in other files below.
mainRouter.use("/blog", blogRouter);

mainRouter.use((req: Request, res: Response) => {
    GenerateResponse(res, 404);
});

export { mainRouter };
