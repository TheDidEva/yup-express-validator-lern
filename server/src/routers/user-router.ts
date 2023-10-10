import { validationRequest } from "../middleware/validate-request";
import { validationShema } from "../middleware/validation-shema";
import { AppDataSource } from "./../data-source";
import { User } from './../entity/User';
import { Router, Request, Response } from 'express';

export const userRouter = Router();

userRouter.get("/get", async (req: Request, res: Response) => {
    await AppDataSource.getRepository(User).find()
        .then((data) => res.json(data));
});

userRouter.post("/create",
    validationShema,
    validationRequest,

    async (req: Request, res: Response) => {
        const user = await AppDataSource.getRepository(User).create(req.body)
        const results = await AppDataSource.getRepository(User).save(user)
        return res.send(results)
    }
);