import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get('/', (req:Request, res:Response, next:NextFunction) => {
    try {
        return res.render('index.ejs', {
            pageActive:"home"
        })
    } catch (error) {
        return next(error);   
    }
});

export default router;