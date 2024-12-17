import { NextFunction, Request, Response, Router } from "express";
import Blog from "../models/blogModel";

const router = Router();

router.get('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const blogs = await Blog.find();
        console.log(blogs);
        
        const currentYear = new Date(Date.now()).getFullYear();
        return res.render('index.ejs', {
            pageActive:"home",
            currentYear,
            blogs
        })
    } catch (error) {
        return next(error);   
    }
});

export default router;