import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get('/', (req:Request, res:Response, next:NextFunction) => {
    try {
        const currentYear = new Date(Date.now()).getFullYear();
        return res.render('index.ejs', {
            pageActive:"home",
            currentYear
        })
    } catch (error) {
        return next(error);   
    }
});

export default router;