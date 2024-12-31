import { NextFunction, Request, Response, Router } from "express";
import Blog from "../models/blogModel";

const router = Router();

router.get('/', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const blogs = await Blog.find();
        
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
router.get('/blog/:slug', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const params = req.params;
        // const randomBlog = await Blog.aggregate([ { $sample: { size: 3 } } ]);
        const randomBlog = await Blog.find({slug:{$ne:params.slug}});
        const blog = await Blog.findOne({slug:params.slug});
        if(!blog){
            return res.redirect('/')
        }
        
        const currentYear = new Date(Date.now()).getFullYear();
        return res.render('blogPage.ejs', {
            pageActive:"blog",
            currentYear,
            blog,
            randomBlog:randomBlog.slice(0,3)
        })
    } catch (error) {
        return next(error);   
    }
});

export default router;