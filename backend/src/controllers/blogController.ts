import { NextFunction, Request, Response } from "express";
import Blog, { type TypeBlog } from "../models/blogModel";
import path from "path";
import { unlink } from "fs";
import { generateSlug } from "../utils/generateSlug";
import AppError from "../error/customError";

export const createNewBlog = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const blogInputPyaload:TypeBlog = req.body;
        if(!blogInputPyaload.title || !blogInputPyaload.category){
            return next(new AppError("Please provide all values", 400))
        }
        const imageFile = req.file as Express.Multer.File;
        blogInputPyaload.image = path.join('/assets/images', imageFile.filename);
        blogInputPyaload.slug = generateSlug(blogInputPyaload.title);
        await Blog.create(blogInputPyaload);
        return res.status(200).json({
            message: 'Blog Created Successfully'
        });
    } catch (error) {
        if(req.file){
            unlink(req.file.path, () => {
                console.log("Exception Occoured File Removed");
            })
        }
        return next(error);
    }
}

