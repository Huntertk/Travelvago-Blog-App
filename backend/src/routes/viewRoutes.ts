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
            blogs,
            title:"Travelvago Blog",
            description:"Find the best travel deals on Travelvago. Explore top destinations, and plan your dream vacation with us!"
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
            randomBlog:randomBlog.slice(0,3),
            title:blog.title,
            description:blog.summary
        })
    } catch (error) {
        return next(error);   
    }
});

router.get('/about', async (req:Request, res:Response, next:NextFunction) => {
    try {
        const currentYear = new Date(Date.now()).getFullYear();
        return res.render('aboutPage.ejs', {
            pageActive:"about",
            currentYear,
            pageTitle:"About Us"
        })
    } catch (error) {
        return next(error);   
    }
});

export default router;